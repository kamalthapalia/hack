import { useAuth } from "../../hooks/AuthHook";
import type { serverMessageType } from "../../definations/socketTypes";

const MessageCard = ({ message }: { message: serverMessageType }) => {
    const { user } = useAuth();

    return (
        <div className={` relative ${message.senderId == user.userId ? " self-end " : "self-start"}`}>
            <span className={`${message.senderId == user.userId ? "bg-cyan-100 " : " bg-blue-500 text-white"} py-1 px-4 z-10 rounded-lg`}> {message.text} </span>
            { message.senderId == user.userId && message.seen && (
                <span className=" absolute -bottom-2 right-0 text-[0.65rem]">
                    ✅
                </span>
            )}
        </div>
    );
};

export default MessageCard;