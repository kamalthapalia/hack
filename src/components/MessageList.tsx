// components/MessageList.tsx
import React from 'react';

// interface Message {
//     id: number;
//     user: string;
//     content: string;
// }
//
// interface MessageListProps {
//     messages: Message[];
// }

const MessageList: React.FC = () => {
    return (
        <div className="flex-1 flex-grow overflow-y-auto flex-col max-h-[750px] flex gap-5">
            {Array(18).fill("").map((message) => (
                <div key={message.id} className="flex">

                    <div className={`flex flex-col gap-1.5`}>
                        <div className="font-semibold">Nigag kumar</div>
                        <div className={`min-w-36  py-1 rounded-md`}>kx</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
