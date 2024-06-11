import { Dispatch, SetStateAction, useEffect, useState } from "react"

export type returnOptionContentType = {
    heading: string,
    subHeading: string,
    buttonText: string
}

const returnOptionContent = (isOnSignUp: boolean): returnOptionContentType => {
    if (isOnSignUp) {
        return {
            heading: "Welcome Visitor !",
            subHeading: "To Keep Connected With Us Please Login With Your Personal Info",
            buttonText: "SIGN IN"
        }
    }
    return {
        heading: "Hello, Friend !",
        subHeading: "Let's Continue Our Journey",
        buttonText: "SIGN UP"
    }
}

const WelcomeNote = ({ isOnSignUp, setIsOnSignUp }: { isOnSignUp: boolean, setIsOnSignUp: Dispatch<SetStateAction<boolean>> }) => {
    const [content, setContent] = useState({} as returnOptionContentType)
    useEffect(() => {
        setContent(returnOptionContent(isOnSignUp))
    }, [isOnSignUp])

    return (
        <div className={`welcomeBox | max-w-[20rem] text-black z-20 center-child flex-col gap-4`}>
            <h1 className="main-heading">{content.heading}</h1>
            <div className=" text-center">
                <p className="pg-text mb-4">{content.subHeading}</p>
                <button onClick={() => setIsOnSignUp(prevState => !prevState)} className="sub-heading rounded-full border min-w-[10rem] py-2 border-[#ff4665]">{content.buttonText}</button>
            </div>
        </div>
    )
}

export default WelcomeNote