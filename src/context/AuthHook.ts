import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// authDetails getting hook
export const useAuth = () => useContext(AuthContext)