import { createContext, useEffect, useState } from "react"
import { serverApi } from "../utils/axios";
import { useNavigate } from "react-router-dom";

// types
import type { UserType, ContextType } from "../definations/frontendTypes";

export const AuthContext = createContext<ContextType>({
    user: {} as UserType,
    login: async () => { },
    logout: () => { },
    isAuthChecked: false
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserType>({} as UserType);
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await serverApi.get('/auth');
                // set user only if there is none
                if (!user.userId) {
                    setUser(res.data.data)
                }
            }
            catch (err) {
                console.log(err)
                setUser({} as UserType)
                navigate("/auth")
            } finally {
                setIsAuthChecked(true)
            }
        }
        fetchData();
    }, [navigate])

    const login = async (email: string, password: string) => {
        try {
            const res = await serverApi.post('/auth/login', { email, password });
            setUser(res.data.data);
        } catch (error) {
            throw new Error("Login Credentials failed");
        }
    };
    const logout = async () => {
        try {
            await serverApi.get("/auth/logout");
            setUser({} as UserType);
            navigate("/auth");
        } catch (error) {
            console.log(error)    
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthChecked }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider