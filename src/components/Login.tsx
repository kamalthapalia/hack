import { useState } from "react"
import SignField from "./subComponent/SignField";
import WelcomeNote from "./subComponent/WelcomeNote";


export default function LoginPage() {
    const [isOnSignUp, setIsOnSignUp] = useState(true);

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