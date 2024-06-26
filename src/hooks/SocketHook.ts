import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

// socket getting hook
export const useSocket = () => useContext(SocketContext)