import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthHook";
import { SocketContextType, SocketType } from "../definations/socketTypes";


export const SocketContext = createContext<SocketContextType>({
    socket: {} as SocketType,
    onlineUsers: []
});


const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<SocketType>(null);
    const [onlineUsers, setOnlineUsers] = useState([] as string[]);
    const { user } = useAuth();

    useEffect(() => {
        if (user.userId) {
            const socket = io(import.meta.env.VITE_SOCKET_URL, { auth: { token: user.userId } });
            setSocket(socket);
            
            return () => {
                socket?.close();
                setSocket(null);
            };
        }
        
        socket?.on("onlineUser", (users: string[]) => {
            setOnlineUsers(users)
            console.log(users)
        })
    }, [user]);


    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};

export default SocketProvider;