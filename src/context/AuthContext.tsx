import { createContext, useEffect, useState } from "react"
import { serverApi } from "../utils/axios";
import { useNavigate } from "react-router-dom";

// types
import type { UserType, ContextType } from "../definations/frontendTypes";
import { fetchImg } from "../utils/fetcher";

// images
import maleProfile from "/maleProfile.jpg";
import femaleProfile from "/femaleProfile.jpg";

export const AuthContext = createContext<ContextType>({
    user: {} as UserType,
    login: async () => { },
    logout: () => { },
    setUser: () => { },
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
                const { data }: { data: UserType } = res.data;
                // set user only if there is none
                if (!user.userId) {
                    let profilePic = await fetchImg(`/users/img/${data.profilePicId}`);
                    if (!profilePic){
                        profilePic = user.gender == "Male" ? maleProfile : femaleProfile;
                    }

                    setUser({...data, profilePic});
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
            console.log(res)
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
        <AuthContext.Provider value={{ user, login, logout, isAuthChecked, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider