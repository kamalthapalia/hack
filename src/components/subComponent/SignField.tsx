import { FormEvent, useState } from "react"
import { OpenCloseEyeIcon } from "../svgs/FontAwesomeIcons"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { serverApi } from "../../utils/axios";
import { isAxiosError } from "axios";
import Verification from "../Verification";

const SignField = ({ isOnSignUp }: { isOnSignUp: boolean }) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const [openVerificationModal, setOpenVerificationModal] = useState(false);


    const postSignUpDetail = () => {
        serverApi.post('/auth/signup', { username: userName, email, password, phoneNumber })
            .then(data => {
                setMessage("successfully signUp your account");
                console.log(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const handleVerification = async () => {
        try {
            await serverApi.post('/auth/otp/verify', { OTP: otpCode });
            postSignUpDetail();

        } catch (error) {
            if (isAxiosError(error)) {
                setError(error.message)
            }

        }

    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // data storing
        if (isOnSignUp) {
            try {
                await serverApi.post('/auth/opt', { email });
                setMessage("verification Send successfully");
                setOpenVerificationModal(true)
            }
            catch (err) {
                if (isAxiosError(err)) {
                    setError(err.message)
                }
                console.log(err)
                setError("Unexpected error occured");
            }
        }
        else {
            serverApi.post('/auth/login', { email, password })
                .then(data => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    if (openVerificationModal) return <Verification handleVerification={handleVerification} otpCode={otpCode} setOtpCode={setOtpCode} setOpenVerificationModal={setOpenVerificationModal} />

    return (
        <form onSubmit={handleSubmit} className={`inputBox | max-w-[20rem] flex flex-col gap-4 items-center`}>
            <div className="inputType | center-child flex-col gap-2">
                <h1 className="main-heading | text-center">{isOnSignUp ? "Create Account" : "Sign in"}</h1>
                <p className="pg-text shaded-text">{isOnSignUp ? "or use your email for registration" : "or use your account"}</p>
            </div>

            <div className="inputFields ">
                {isOnSignUp &&
                    <div className={`inputField ${userName && "hasContent"}`}>
                        <span> Username </span>
                        <input name="username" type="text" value={userName} maxLength={30} onChange={(e) => setUserName(e.target.value)} required />
                    </div>
                }
                <div className={`inputField ${email && "hasContent"}`}>
                    <span> Email </span>
                    <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={`inputField ${password && "hasContent"} relative`}>
                    <span className=" passwordSpan"> Password </span>
                    <input type={`${passwordVisible ? "text" : "password"}`} value={password} name="password" onChange={(e) => setPassword(e.target.value)} minLength={8} required />
                    <OpenCloseEyeIcon icon={passwordVisible ? faEyeSlash : faEye} onClick={() => setPasswordVisible(prevSt => !prevSt)} style={{ cursor: "pointer", position: 'absolute', right: '0.1rem' }} />
                </div>
                {isOnSignUp &&
                    <div className={`inputField ${phoneNumber && "hasContent"}`}>
                        <span> phoneNumber </span>
                        <input name="phoneNumber" type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} onKeyDown={e => e.key == "ArrowUp" || e.key == 'ArrowDown' ? e.preventDefault() : ''} minLength={10} maxLength={10} required />
                    </div>
                }
            </div>
            <p className=" bg-red-600 font-bold"> {error} </p>
            <p className=" bg-cyan-400 font-bold text-xl"> {message} </p>
            <button type="submit" className={`mt-4 sub-heading text-white bg-rose-500 rounded-full py-2 min-w-[10rem]`}> {isOnSignUp ? "SIGN UP" : "SIGN IN"}</button>

        </form>

    )
}

export default SignField