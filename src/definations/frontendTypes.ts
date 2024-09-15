import { Dispatch, SetStateAction } from "react";

export type FormDataType = {
    username: string,
    email: string,
    password: string,
    phoneNumber: string
}

// User and context
export type UserType = {
    username: string,
    userId: string,
    profilePicId: string,
    profilePic: string,
    email: string,
    phoneNumber: number,
    type: "Farmer" | "Expert",
    location: string,
    description?: string,
    gender: 'Male' | 'Female',
};

export type ContextType = {
    user: UserType;
    setUser: Dispatch<SetStateAction<UserType>>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthChecked: boolean;
}


export type ChattedUserType = Omit<UserType, "description" | "userId"> & {
    _id: string
};