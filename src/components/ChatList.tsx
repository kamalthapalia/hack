import { useEffect, useState } from "react";
import ChatCard from "./ChatCard";

// hooks
import { useSocket } from "../hooks/SocketHook";
import { useAuth } from "../hooks/AuthHook";

//utils
import { serverApi } from "../utils/axios";

// types
import type { ChattedUserType } from "../definations/frontendTypes";

const ChatList = () => {
    const { user } = useAuth();
    const { socket, onlineUsers, unseenFromUsers } = useSocket();

    const [conversationPeople, setConversationPeople] = useState([] as ChattedUserType[]);

    useEffect(() => {
        const fetchUsers = async () => {

            if (user.userId) {
                try {
                    const res = await serverApi.get(`/users/conversation/${user.userId}`);
                    // console.log(res)
                    setConversationPeople(res.data.chattedUsers);
                    // setConversationPeople(res.data.users);
                } catch (error) {
                    console.error("Error fetching users:", error);
                }
            }
        };

        fetchUsers();
    }, [user])

    useEffect(() => {
        socket?.on("newConversationStart", (newConvoUser) => {
            setConversationPeople(prev => [newConvoUser, ...prev]);
        })
    }, [socket])


    return (
        <div className={`h-screen w-60 overflow-y-scroll scrollbar scrollbar-thumb-rounded flex flex-col gap-5 py-4`}>
            <div>
                <h2 className=" text-xl text-gray-600 font-semibold leading-7 p-2">People who you have previously contacted with !</h2>
                <hr className=" h-[1.5px] bg-gray-300" />
            </div>

            {conversationPeople.map(convoPeople => {
                // calculations
                const isUnseen = unseenFromUsers.includes(convoPeople._id)
                const isOnline = onlineUsers.includes(convoPeople._id)

                return (
                    <ChatCard isUnseen={isUnseen} isOnline={isOnline} key={convoPeople._id} convoPeople={convoPeople} />
                )
            })}

        </div>
    );
};

export default ChatList;