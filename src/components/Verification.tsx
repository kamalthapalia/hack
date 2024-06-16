import { Dispatch, SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom";
import { serverApi } from "../utils/axios";
// types
import { FormDataType } from '../definations/frontendTypes';
import { isAxiosError } from "axios";
// icons
import { GoIssueClosed } from "react-icons/go"
import { IoIosCloseCircle } from "react-icons/io"

// redundant kina garnu, right?
type setType<T> = Dispatch<SetStateAction<T>>

const Verification = ({ setOpenVerificationModal, setError, setMessage, formData }: { setError: setType<string>, setOpenVerificationModal: setType<boolean>, setMessage: setType<string>, formData: FormDataType }) => {

    const navigate = useNavigate();
    const [otpCode, setOtpCode] = useState("");

    const postSignUpDetail = async () => {
        await serverApi.post('/auth/signup', formData)
            .then(data => {
                setMessage("successfully signUp your account");
                setError('')
                console.log(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    const handleVerification = async () => {
        try {
            await serverApi.post('/auth/otp/verify', { OTP: otpCode });
            await postSignUpDetail();
            navigate('/');

        } catch (error) {
            if (isAxiosError(error)) {
                setError(error.message)
            }
        }
    }


    return (
        <div className=" relative center-child flex-col gap-6 p-4 pt-8 mx-4 rounded-xl bg-blue-400 shadow-lg shadow-blue-400/50 text-white">

            <IoIosCloseCircle onClick={() => setOpenVerificationModal(false)} className=" absolute right-0 top-0 text-4xl fill-white cursor-pointer" />

            <div className=" center-child flex-col gap-2">
                <GoIssueClosed className=" text-6xl text-cyan-100" />
                <span className="text-xl text-center">OTP (One time Password) Code Sent successfully</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <label htmlFor="verification" className=" text-lg">Enter your otp here : </label>
                <input type="text" name="verification" id="verification" value={otpCode} onChange={e => setOtpCode(e.target.value)} className=" bg-transparent border-b-[1px] border-rose-200 outline-none text-center" maxLength={6} minLength={6} required />

                <button onClick={handleVerification} className=" border-2 border-red-300 px-8 py-1 rounded-xl">Verify OTP</button>
            </div>

        </div>
    )
}

export default Verification
