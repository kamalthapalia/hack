import React, {useState} from 'react';

// interface MessageInputProps {
//     onSend: (message: string) => void;
// }

const MessageInput: React.FC = () => {
    const [message, setMessage] = useState('');


    return (
        <div className="flex w-full">
            <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded-l"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button

                className="bg-blue-600 text-white p-2 rounded-r"
            >
                Send
            </button>
        </div>
    );
};

export default MessageInput;
