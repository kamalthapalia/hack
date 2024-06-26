import { useEffect, useRef, useState } from 'react';
import type { serverMessageType } from '../definations/socketTypes';

// components
import MessageCard from './subComponent/MessageCard';

// context + utils
import { useSocket } from '../hooks/SocketHook';
import { useAuth } from '../hooks/AuthHook';
import { Queue } from '../utils/ProcessQueue';


const MessageList = ({ roomerId }: { roomerId?: string }) => {
    const { socket } = useSocket();
    const { user } = useAuth();
    const messageEndRef = useRef<HTMLDivElement>(null); // for scrolling

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
        // console.log(user.userId, roomerId)
        socket?.emit("getConversationMessages", { viewer: user.userId, roomer: roomerId! });

        socket?.on("receiveConversation", (messages) => {
            setPreviousMessages(messages);
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
        });

        return () => { socket?.off(); }
    }, [roomerId, socket, user.userId]);

    // when new message
    useEffect(()=> {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth"})
    }, [previousMessages])

    return (
        <div className=' overflow-y-scroll py-2'>
            <div className="flex flex-col justify-end gap-3">
                {previousMessages.map(prevMessage => (
                    <MessageCard key={prevMessage._id} message={prevMessage} />
                ))}
                <div ref={messageEndRef}></div>
            </div>
        </div>
    );
};

export default MessageList;
