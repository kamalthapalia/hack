import { Link } from "react-router-dom";
import type { ChattedUserType } from "../definations/frontendTypes";
import { useEffect, useState } from "react";

// images
import maleProfile from "/maleProfile.jpg";
import femaleProfile from "/femaleProfile.jpg";
import { fetchImg } from "../utils/fetcher";

const ChatCard = ({ isOnline, convoPeople, isUnseen }: { isOnline: boolean, convoPeople: ChattedUserType, isUnseen: boolean }) => {
    const [profilePic, setProfilePic] = useState(convoPeople.gender == 'Male' ? maleProfile : femaleProfile);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userImageGetUrl = `/users/img/${convoPeople.profilePicId}`;
            const UserProfileImg = await fetchImg(userImageGetUrl)

            setProfilePic(prev => UserProfileImg || prev)
        }
        fetchUserInfo();
    }, [])

    return (
        <Link to={`/dash/chat/${convoPeople._id}`} className={` flex items-end gap-2 bg-gray-100 p-3 rounded-lg cursor-pointer`}>
            <div className={`relative p-0.5 border-2 border-blue-300 rounded-full`}>
                <img className={`w-10 h-10 rounded-full object-cover`}
                    src={profilePic}
                    alt="" />
                {isOnline && <span className="absolute h-3.5 w-3.5 left-1 bottom-0 rounded-full bg-green-600"></span>}
                {isUnseen && <span className="absolute h-2 w-2 left-1.5 bottom-0.5 rounded-full bg-rose-400"></span>}
            </div>
            <div className={``}>
                <p className={`font-semibold`}>{convoPeople.username ?? "Usher"}</p>
                <p className={`text-xs font-semibold text-gray-500`}>({convoPeople.type ?? "Expert"})</p>
            </div>

        </Link>
    );
};

export default ChatCard;