import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// hooks
import { useAuth } from "../context/AuthHook.ts";
import { useSocket } from "../context/SocketHook.ts";

// components
import MessageList from "./MessageList.tsx";
import MessageInput from "./MessageInput.tsx";

// utils + types
import { serverApi } from "../utils/axios.ts";
import type{ UserType } from "../definations/frontendTypes.ts";

const Conversation = () => {
    const [roomerUser, setRoomerUser] = useState({} as UserType)
    const {roomerId} = useParams();

    // const {user} = useAuth();
    // const {socket} = useSocket();

    useEffect(()=> {
        const fetchUserData = async()=> {
            const user = await serverApi.get(`/users/${roomerId}`);
            // console.log(user.data.data)
            setRoomerUser(user.data.data)
        }
        fetchUserData()
    }, [roomerId])

    // useEffect(() => {
    //     if (roomerId && socket?.connected){
    //         socket.emit("getConversationMessages", {viewer: user.userId, roomer: roomerId});
    //         socket.on("receiveConversation", (messages) => {
    //             console.log(messages)
    //         });
    //     }

    //   }, [user, socket, roomerId]);

    
    return (
        <div className={` h-full relative`}>
            <div className={`h-full bg-white sticky top-0`}>
                <div className={` flex justify-between items-center p-2 border-b`}>
                    <p className={`font-semibold text-lg`}>{roomerUser.username || "Niggendra Bahadur"}</p>
                    <div className="text-center">
                        <p className={`text-sm font-semibold text-gray-600`}>{roomerUser.location || "Bhadrapur Jhapa"}</p>
                        <p className={`text-sm font-semibold text-gray-600`}>{roomerUser.email}</p>
                    </div>
                </div>
                <div className={`flex flex-col justify-between gap-8 relative`}>
                    <MessageList/>
                    <MessageInput/>
                </div>
            </div>
        </div>
    );
};

export default Conversation;