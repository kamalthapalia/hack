import {useState} from 'react';
import { useAuth } from '../hooks/AuthHook';
import { useSocket } from '../hooks/SocketHook';

const MessageInput = ({roomerId}: {roomerId?: string}) => {
    const {user} = useAuth();
    const {socket} = useSocket();

    const [message, setMessage] = useState('');

    const handleMessageSend = async () => {
		if (message) {
			socket?.emit("sendMessage", {
				senderId: user.userId,
				receiverId: roomerId!,
				message,
			});
			setMessage("");
		}
	};

    return (
        <div className="flex w-full">
            <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded-l outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleMessageSend} className="bg-blue-600 text-white p-2 rounded-r" >
                Send
            </button>
        </div>
    );
};

export default MessageInput;
