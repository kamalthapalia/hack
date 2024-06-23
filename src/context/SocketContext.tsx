import React, { createContext, useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import { useAuth } from "../hooks/AuthHook";
import { SocketContextType, SocketType, serverMessageType } from "../definations/socketTypes";
import { ChattedUserType } from "../definations/frontendTypes";


export const SocketContext = createContext<SocketContextType>({
    socket: null,
    onlineUsers: [],
    unseenFromUsers: [],
    setUnseenFromUsers: () => { }
});


const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<SocketType>(null);
    const [onlineUsers, setOnlineUsers] = useState([] as string[]);
    const [unseenFromUsers, setUnseenFromUsers] = useState([] as string[]);
    const { user } = useAuth();


    const handleOnlineUsers = useCallback((users: string[]) => {
        setOnlineUsers(users);
        console.log(users);
    }, []);
    
    const handleReceiveMessage = useCallback((saveMessage: serverMessageType) => {
        setUnseenFromUsers(prev => {
            if (prev.includes(saveMessage.senderId)) {
                console.log(saveMessage)
                return prev;
            }
            console.log(saveMessage)
            return [saveMessage.senderId, ...prev]
        });
    }, []);

    const handleNewConversationStart = useCallback((msgByNewUser: ChattedUserType) => {
        setUnseenFromUsers((prev) => [msgByNewUser._id, ...prev]);
    }, []);

    useEffect(() => {
        if (user.userId && !socket?.connected) {
            const clientSocket = io(import.meta.env.VITE_SOCKET_URL, { auth: { token: user.userId } });
            setSocket(clientSocket);

            clientSocket.on("onlineUser", handleOnlineUsers);
            return () => {
                clientSocket.off("onlineUser", handleOnlineUsers);
                clientSocket.close();
                setSocket(null);
            };
        }
    }, [user, handleOnlineUsers]);

    useEffect(() => {
        socket?.on('receiveMessage', handleReceiveMessage)
        socket?.on('newConversationStart', handleNewConversationStart);
        return () => {
            socket?.off("receiveMessage", handleReceiveMessage)
            socket?.off("newConversationStart", handleNewConversationStart)
        }
    }, [socket, handleReceiveMessage, handleNewConversationStart])


    return <SocketContext.Provider value={{ socket, onlineUsers, unseenFromUsers, setUnseenFromUsers }}>{children}</SocketContext.Provider>;
};

export default SocketProvider;