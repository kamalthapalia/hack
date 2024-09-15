import { Link, useParams } from "react-router-dom";
import DashMenuLayout from "../../components/DashMenuLayout.tsx";
import { useEffect, useState } from "react";

// utils
import { serverApi } from "../../utils/axios.ts";
import { UserType } from "../../definations/frontendTypes.ts";
import { SiImessage } from "react-icons/si";
import { fetchImg } from "../../utils/fetcher.ts";

const OthersProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState<UserType | null>(null)

    useEffect(() => {
        const fetchUserInfo = async () => {
            const res = await serverApi.get(`/users/${userId}`)
            const {data}: {data: UserType} = res.data;

            const userImageGetUrl = `/users/img/${data.profilePicId}`;
            const UserProfileImg = await fetchImg(userImageGetUrl)            
            setUser({...data, profilePic: UserProfileImg})
        }
        fetchUserInfo();

    }, [userId])


    return (
        <div>
            <DashMenuLayout title={`Profile`}>
                <div className={`flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-md`}>
                    <div className={` w-full flex items-center justify-between gap-4`}>
                        <div className="user-info | flex items-center gap-4 mb-4">
                            <div className={`p-0.5 border-2 border-gray-400 rounded-full`}>
                                <img
                                    className={`w-20 h-20 rounded-full object-cover cursor-pointer`}
                                    src={user?.profilePic}
                                    alt="Profile Avatar"
                                    onClick={() => window.open(user?.profilePic, '_blank')}
                                />
                            </div>
                            <div>
                                <p className={`text-xl font-semibold`}>{user?.username}</p>
                                <p className={`text-sm font-semibold text-gray-500`}>{user?.type}</p>
                            </div>
                        </div>

                        <Link to={`/dash/chat/${userId}`} className="chat | flex items-center gap-4 bg-blue-400 text-white p-2 px-4 rounded-md">
                            <p>Chat with Me</p>
                            <SiImessage className=" text-2xl"/>
                        </Link>
                    </div>
                    <div className={`flex flex-col gap-2 w-full`}>
                        <div className={`bg-white p-4 rounded-lg shadow-inner`}>
                            <h3 className={`text-lg font-semibold mb-2`}>About</h3>
                            <p className={`text-sm text-gray-700`}>{user?.description || `User Description`}</p>
                        </div>
                        <div className={`bg-white p-4 rounded-lg shadow-inner`}>
                            <h3 className={`text-lg font-semibold mb-2`}>Contact Information</h3>
                            <p className={`text-sm text-gray-700`}>Email: {user?.email}</p>
                            <p className={`text-sm text-gray-700`}>Phone: {user?.phoneNumber}</p>
                        </div>

                        {/* TODO: Future goal */}
                        {/* <div className={`bg-white p-4 rounded-lg shadow-inner`}>
                            <h3 className={`text-lg font-semibold mb-2`}>Additional Information</h3>
                            Will add in future if seems ok
                            <p className={`text-sm text-gray-700`}>Any other relevant information can be added here,
                                such as links to social media profiles, portfolio, etc.</p>
                        </div> */}
                    </div>
                </div>
            </DashMenuLayout>
        </div>
    );
};

export default OthersProfile;