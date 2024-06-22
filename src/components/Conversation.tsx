import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import MessageList from "./MessageList.tsx";
import MessageInput from "./MessageInput.tsx";

// utils + types
import { serverApi } from "../utils/axios.ts";
import type { UserType } from "../definations/frontendTypes.ts";

const Conversation = () => {
    const [roomerUser, setRoomerUser] = useState({} as UserType)
    const { roomerId } = useParams();

    // get opposing user info
    useEffect(() => {
        const fetchUserData = async () => {
            const user = await serverApi.get(`/users/${roomerId}`);
            setRoomerUser(user.data.data)
        }
        fetchUserData()
    }, [roomerId])

    return (
        <div className={`h-full relative flex flex-col gap-2 bg-white px-2 sm:px-4`}>
            <div className={` flex justify-between items-center p-2 border-b`}>
                <span className={`font-semibold text-md`}>{roomerUser.username || "Niggendra Bahadur"}</span>
                <div className="text-center">
                    <p className={`text-sm font-semibold text-gray-600`}>{roomerUser.location || "Bhadrapur Jhapa"}</p>
                    <p className={`text-sm font-semibold text-gray-600`}>{roomerUser.email}</p>
                </div>
            </div>
            <div className={` relative h-full w-full flex flex-col gap-4 py-2 justify-end`}>
                <MessageList roomerId={roomerId} />
                <MessageInput roomerId={roomerId} />
            </div>
        </div>
    );
};

export default Conversation;