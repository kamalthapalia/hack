import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import MessageList from "./MessageList.tsx";
import MessageInput from "./MessageInput.tsx";

// utils + types
import { serverApi } from "../utils/axios.ts";
import type { UserType } from "../definations/frontendTypes.ts";
import { useSocket } from "../hooks/SocketHook.ts";

const Conversation = () => {
    const [roomerUser, setRoomerUser] = useState({} as UserType)
    const { roomerId } = useParams();

    const {unseenFromUsers, setUnseenFromUsers} = useSocket();

    // get opposing user info
    useEffect(() => {
        const fetchUserData = async () => {
            const user = await serverApi.get(`/users/${roomerId}`);
            setRoomerUser(user.data.data)

            // remove seen users
            if (unseenFromUsers.includes(roomerId!)){
                setUnseenFromUsers(unseenUserList => {
                    return unseenUserList.filter(item => item != roomerId);
                })
            }
        }
        fetchUserData()
    }, [roomerId])

    return (
        <div className={`grid grid-rows-[5rem,1fr] flex-grow max-w-[1000px]`}>
            <div className={` flex justify-between items-center p-2 border-b`}>
                <span className={`font-semibold text-md`}>{roomerUser.username || "Niggendra Bahadur"}</span>
                <div className="text-center">
                    <p className={`text-sm font-semibold text-gray-600`}>{roomerUser.location}</p>
                    <p className={`text-sm font-semibold text-gray-600`}>{roomerUser.email}</p>
                </div>
            </div>
            <div className={`max-h-[90vh] h-full flex flex-col gap-2 py-2 justify-end`}>
                <MessageList roomerId={roomerId} />
                <MessageInput roomerId={roomerId} />
            </div>
        </div>
    );
};

export default Conversation;