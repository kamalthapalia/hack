import { useEffect, useState } from "react";
import ChatCard from "./ChatCard";

// hooks
// import { useSocket } from "../context/SocketHook";
import { useAuth } from "../context/AuthHook";

//utils
import { serverApi } from "../utils/axios";

import type { ChattedUserType } from "../definations/frontendTypes";

const ChatList = () => {
    const { user } = useAuth();
    // const { socket } = useSocket();
    const [conversationPeople, setConversationPeople] = useState([] as ChattedUserType[]);


    useEffect(() => {
        const fetchUsers = async () => {

            if (user) {
                try {
                    const res = await serverApi.get(`/users/conversation/${user.userId}`);
                    console.log(res)
                    //   setConversationPeople(res.data.chattedUsers);
                    setConversationPeople(res.data.users);
                } catch (error) {
                    console.error("Error fetching users:", error);
                }
            }
        };

        fetchUsers();
    }, [user])


    return (
        <div className={`h-screen w-60 overflow-y-scroll scrollbar scrollbar-thumb-rounded flex flex-col gap-5 `}>
            {conversationPeople.map(convoPeople => (
                <ChatCard key={convoPeople._id} convoPeople={convoPeople} />
            ))}
            {/* <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard /> */}

        </div>
    );
};

export default ChatList;