import { Outlet } from "react-router-dom";
import ChatList from "../../components/ChatList.tsx";

const Chat = () => {
    return (
        <div className="h-screen flex gap-x-4 mx-6">
            <ChatList />
            <div className={`flex-grow max-w-[1000px] h-full`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Chat;