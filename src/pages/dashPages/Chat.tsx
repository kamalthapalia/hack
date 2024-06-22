import { Outlet } from "react-router-dom";

import ChatList from "../../components/ChatList.tsx";
// import Conversation from "../../components/Conversation.tsx";

const Chat = () => {
    return (
        <div className="h-screen flex gap-8 px-8">
            <ChatList />
            <div className={`flex-grow max-w-[1000px] h-full`}>
                <Outlet />
                {/*<ExpertList/>*/}
            </div>
        </div>
    );
};

export default Chat;