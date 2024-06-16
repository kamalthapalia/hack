import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// components
import SignField from "../components/subComponent/SignField";
import WelcomeNote from "../components/subComponent/WelcomeNote";
// utilities function
import { serverApi } from "../utils/axios";

export default function AuthPage() {
    const [isOnSignUp, setIsOnSignUp] = useState(true);
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchUser = async() => {
            try {
                await serverApi.get("/auth");
                navigate("/");
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser();
    },[])

    return (
        <main className={`center-child flex-col md:flex-row w-full max-w-[1400px] h-[100vh] relative text-black`}>
            <span className={`underlay ${isOnSignUp && "signin"}`}></span>
            <div className="signInContainer | w-[100%] md:w-[50%] h-[50%] md:h-[100%] center-child">
                {isOnSignUp ?
                    <WelcomeNote isOnSignUp={isOnSignUp} setIsOnSignUp={setIsOnSignUp} />
                    :
                    <SignField isOnSignUp={isOnSignUp} />
                }
            </div>

            <div className="signUpContainer | w-[100%] md:w-[50%] h-[50%] md:h-[100%]  center-child">
                {isOnSignUp ?
                    <SignField isOnSignUp={isOnSignUp} />
                    :
                    <WelcomeNote isOnSignUp={isOnSignUp} setIsOnSignUp={setIsOnSignUp} />
                }
            </div>

        </main>
    )
}