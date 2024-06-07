import MessageList from "./MessageList.tsx";
import MessageInput from "./MessageInput.tsx";

const Conversation = () => {
    return (
        <div className={` h-full relative `}>
            <div className={`h-full bg-white sticky top-0`}>
                <div className={`pb-2 border-b`}>
                    <p className={`font-semibold text-lg`}>Niggendra Bahadur</p>
                    <p className={`text-sm font-semibold text-gray-600`}>Bhadrapur Jhapa</p>
                </div>
                <div className={`h-full flex flex-col relative`}>
                    <MessageList/>
                    <MessageInput/>
                </div>
            </div>
        </div>
    );
};

export default Conversation;