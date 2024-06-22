import { useContext } from "react";
import { SocketContext } from "./SocketContext";

// socket getting hook
export const useSocket = () => useContext(SocketContext)