// components/MessageList.tsx
import type { serverMessageType } from '../definations/socketTypes';
import { useEffect, useState } from 'react';
import { useSocket } from '../context/SocketHook';
import { useAuth } from '../context/AuthHook';
import { Queue } from '../utils/ProcessQueue';
import MessageCard from './subComponent/MessageCard';


const MessageList = ({ roomerId }: { roomerId?: string }) => {
    const { socket } = useSocket();
    const { user } = useAuth();

    const [previousMessages, setPreviousMessages] = useState([] as serverMessageType[]);
    const [stateUpdateQueue] = useState(new Queue<serverMessageType>())


    useEffect(() => {
        const processQueue = () => {
            const updatedMessages = [...previousMessages];
            let newMessagesSeen = false;

            while (!stateUpdateQueue.isEmpty()) {
                const newMessage = stateUpdateQueue.dequeue();
                // if new message arrives, check if sender and receiver are of the same room or not
                if (newMessage && (newMessage.senderId == roomerId || newMessage.senderId == user.userId)) {
                    // console.log(newMessage);
                    if (newMessage.senderId !== user.userId && !newMessage.seen) {
                        socket?.emit("seen", {
                            newMessageId: newMessage._id,
                            senderId: newMessage.senderId,
                        });
                        newMessagesSeen = true;
                    }
                    if (
                        updatedMessages.length === 0 ||
                        updatedMessages[updatedMessages.length - 1]._id !== newMessage._id
                    ) {
                        updatedMessages.push(newMessage);
                    } else {
                        updatedMessages[updatedMessages.length - 1] = newMessage;
                    }
                }
            }

            if (
                newMessagesSeen ||
                updatedMessages.length !== previousMessages.length
            ) {
                setPreviousMessages(updatedMessages);
            }
            // scrollToBottom();
        };

        const interval = setInterval(processQueue, 150); // Process queue every 150ms

        socket?.on("receiveMessage", (newMessage) => {
            stateUpdateQueue.enqueue(newMessage);
        });

        return () => {
            clearInterval(interval);
            socket?.off("receiveMessage");
        };
    }, [previousMessages, user.userId, socket, stateUpdateQueue, roomerId]);


    useEffect(() => {
        console.log(user.userId, roomerId)
        socket?.emit("getConversationMessages", { viewer: user.userId, roomer: roomerId! });

        socket?.on("receiveConversation", (messages) => {
            setPreviousMessages(messages);
            // scrollToBottom();
        });
        socket?.on("messageSeen", (messageId) => {
            setPreviousMessages((prevMsg) => {
                const updatedMessages = prevMsg.map((prev) => {
                    if (prev._id == messageId) {
                        prev.seen = true;
                    }
                    return prev;
                });
                return updatedMessages;
            });
            // scrollToBottom();
        });

        return () => { socket?.off(); }
    }, [roomerId, socket, user.userId]);

    return (
        <div className="h-full flex flex-col justify-end gap-3 overflow-y-auto">
            {previousMessages.map(prevMessage => (
                <MessageCard key={prevMessage._id} message={prevMessage} />
            ))}
        </div>
    );
};

export default MessageList;
