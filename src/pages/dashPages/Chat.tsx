import DashMenuLayout from "../../components/DashMenuLayout.tsx";
import ChatList from "../../components/ChatList.tsx";
import Conversation from "../../components/Conversation.tsx";

const Chat = () => {
    return (
        <div className="flex flex-col h-screen">
            <DashMenuLayout title="Chat">
                <div className="flex gap-10 h-full">
                    <ChatList/>
                    <div className={`flex-grow max-w-[1000px] min-h-full`}>
                        {/*<ExpertList/>*/}
                        <Conversation/>
                    </div>
                </div>
            </DashMenuLayout>
        </div>
    );
};

export default Chat;