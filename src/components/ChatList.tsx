import ChatCard from "./ChatCard";

const ChatList = () => {
    return (
        <div className={`flex flex-col gap-5 w-96`}>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>

        </div>
    );
};

export default ChatList;