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
    email: string,
    phoneNumber: number,
    type: string,
    description?: string
};

export type ContextType = {
    user: UserType,
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}


export type ChattedUserType = Omit<UserType, "description" | "userId"> & {
    _id: string
};