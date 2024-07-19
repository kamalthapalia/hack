import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

// icons
import { OpenCloseEyeIcon } from "../svgs/FontAwesomeIcons"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// components
import Verification from "../Verification";

// utils & context
import { serverApi } from "../../utils/axios";
import { isAxiosError } from "axios";
import { useAuth } from "../../hooks/AuthHook";



const SignField = ({ isOnSignUp }: { isOnSignUp: boolean }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        description: '',
        location: '',
        gender: 'Male',
        type: "Farmer"
    })

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const [openVerificationModal, setOpenVerificationModal] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // data storing
        if (isOnSignUp) {
            try {
                await serverApi.post('/auth/otp', { email: formData.email });
                setMessage("verification Send successfully");
                setError('')
                setOpenVerificationModal(true)
            }
            catch (err) {
                if (isAxiosError(err)) {
                    setError(err.message)
                }
                else {
                    setError("Unexpected error occured");
                }
                setMessage('')
            }
        }
        else {
            try {
                await login(formData.email, formData.password);
                navigate("/")
            }
            catch (err) {
                console.log(err);
                navigate('/auth')
            }
        }
    }

    const handleFormDataChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    // when on signup and on verification sent 
    if (isOnSignUp && openVerificationModal) return <Verification setError={setError} formData={formData} setMessage={setMessage} setOpenVerificationModal={setOpenVerificationModal} />

    return (
        <form onSubmit={handleSubmit} className={`inputBox | max-w-[16rem] w-full flex flex-col gap-4 sm:gap-8 items-center`}>
            <div className="inputType | center-child flex-col gap-0 md:gap-1">
                <h1 className="main-heading | text-center">{isOnSignUp ? "Create Account" : "Sign in"}</h1>
                <p className="pg-text shaded-text">{isOnSignUp ? "or use your email for registration" : "or use your account"}</p>
            </div>

            <div className="inputFields | flex flex-col gap-3 md:gap-5">
                {isOnSignUp &&
                    <div className={`inputField ${formData.username && "hasContent"}`}>
                        <span> Username </span>
                        <input name="username" type="text" value={formData.username} maxLength={30} onChange={(e) => handleFormDataChange(e)} required />
                    </div>
                }
                <div className={`inputField ${formData.email && "hasContent"}`}>
                    <span> Email </span>
                    <input name="email" type="email" value={formData.email} onChange={(e) => handleFormDataChange(e)} required />
                </div>
                <div className={`inputField ${formData.password && "hasContent"} relative`}>
                    <span className=" passwordSpan"> Password </span>
                    <input type={`${passwordVisible ? "text" : "password"}`} value={formData.password} name="password" onChange={(e) => handleFormDataChange(e)} minLength={8} required />
                    <OpenCloseEyeIcon icon={passwordVisible ? faEyeSlash : faEye} onClick={() => setPasswordVisible(prevSt => !prevSt)} style={{ cursor: "pointer", position: 'absolute', right: '0' }} />
                </div>
                {isOnSignUp &&
                    <>
                        <div className={`inputField ${formData.phoneNumber && "hasContent"}`}>
                            <span> Phone Number </span>
                            <input name="phoneNumber" type="number" value={formData.phoneNumber} onChange={(e) => handleFormDataChange(e)} onKeyDown={e => e.key == "ArrowUp" || e.key == 'ArrowDown' ? e.preventDefault() : ''} minLength={10} maxLength={10} required />
                        </div>
                        <div className="flex flex-col">
                            <p className=" text-xs sm:text-sm font-bold text-[#ff5672]">Account Type</p>
                            <select name="type" onChange={(e) => handleFormDataChange(e)} defaultValue={"Farmer"} className=" text-[#014368] font-semibold cursor-pointer outline-none text-sm sm:text-base">
                                <option value="Farmer">Farmer</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <p className=" text-xs sm:text-sm font-bold text-[#ff5672]">Gender</p>
                            <select name="gender" onChange={(e) => handleFormDataChange(e)} defaultValue={formData.gender} className=" text-[#014368] font-semibold cursor-pointer outline-none text-sm sm:text-base">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className={`inputField ${formData.location && "hasContent"}`}>
                            <span> Your Location ... </span>
                            <input name="location" value={formData.location} onChange={(e) => handleFormDataChange(e)} required />
                        </div>
                        <div className={`inputField ${formData.description && "hasContent"}`}>
                            <span> Your Description ... </span>
                            <input name="description" value={formData.description} onChange={(e) => handleFormDataChange(e)} required />
                        </div>
                    </>
                }
            </div>
            {error && <p className=" bg-red-600 font-bold">{error}</p>}
            {message && <p className=" bg-cyan-400 font-bold text-xl"> {message} </p>}
            <button type="submit" className={`mt-4 sub-heading text-white bg-rose-500 rounded-full py-2 min-w-[10rem]`}> {isOnSignUp ? "SIGN UP" : "SIGN IN"}</button>

        </form>

    )
}

export default SignField