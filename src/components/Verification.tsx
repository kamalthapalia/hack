import { Dispatch, SetStateAction } from "react"

const Verification = ({ handleVerification, otpCode, setOtpCode, setOpenVerificationModal }: { handleVerification: () => void, otpCode: string, setOtpCode: Dispatch<SetStateAction<string>>, setOpenVerificationModal: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div>
            <span onClick={()=> setOpenVerificationModal(false)}>X</span>
            <label htmlFor="verification">Enter your otp here</label>
            <input type="text" name="verification" id="verification" value={otpCode} onChange={e => setOtpCode(e.target.value)} />

            <button onClick={handleVerification}>Submit verification</button>

        </div>
    )
}

export default Verification
