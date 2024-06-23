import type {Socket} from "socket.io-client";
import type{ ChattedUserType } from "./frontendTypes";

// TODO: type this properly
export type serverMessageType = {
    _id: string,
    senderId: string,
    seen: boolean,
    text: string,

}


// Define the type for your server's events
export interface ServerToClientEvents {
	onlineUser: (users: string[]) => void;
    newConversationStart: (userData: ChattedUserType) => void;

    receiveMessage: (saveMessage : serverMessageType) => void;
    messageSeen: (messageId: string) => void;
    receiveConversation: (messages: serverMessageType[]) => void
}

// Define the type for your client's events
export interface ClientToServerEvents {
	sendMessage: (messageObj: {senderId: string; receiverId: string, message: string}) => void;
    getConversationMessages: (roomUsersId: {viewer: string, roomer: string}) => void;
    seen: ({newMessageId, senderId}: {newMessageId: string, senderId: string}) => void;

}

export type SocketType = Socket<
	ServerToClientEvents,
	ClientToServerEvents
> | null;

export interface SocketContextType {
	socket: SocketType;
	onlineUsers: string[];
	unseenFromUsers: string[];
    setUnseenFromUsers: React.Dispatch<React.SetStateAction<string[]>>
}
