import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// authDetails getting hook
export const useAuth = () => useContext(AuthContext)