// Icons
import { GiGoat } from "react-icons/gi";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
// types
import { MarketPlacePostApiType } from "../definations/apiTypes";
// utils
import { timeParser } from "../utils/timeParser";
import { commaSeprator } from "../utils/commaSeparator";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchImg } from "../utils/fetcher";

import NotFound from '/newsImgNotLoad.jpg';

const MarketCard = ({ postDetails }: { postDetails: MarketPlacePostApiType }) => {
    const [productImg, setProductImg] = useState('');

    useEffect(()=> {
        const fetchImage = async() => {
            const profilePic = await fetchImg(`/marketplace/img/${postDetails.pictureId}`);
            if (!profilePic){
                setProductImg(NotFound)
            }else {
                setProductImg(profilePic)
            }
        }
        fetchImage();
    }, [])

    return (
        <Link to={`/product/${postDetails._id}`} className={`cardAnimation | flex flex-col gap-4`}>
            <img
                className={`h-[400px] w-full object-cover rounded-md`}
                src={productImg}
                alt="" />
            <div>

                <div className={`flex items-center justify-between pb-1`}>
                    {/* <Link to={`/dash/profile/${postDetails.userId}`} className=" text-blue-700 font-semibold">By: {postDetails.postedBy || "anonymous" }</Link> */}
                    <p className=" text-cyan-700 font-semibold">By: {postDetails.postedBy || "anonymous" }</p>
                    <span className={`font-semibold py-1 px-4 rounded-t-2xl rounded-b-xl ${postDetails.type == 'sale' ? "bg-rose-200" : "bg-cyan-200"}`}>{postDetails.type}</span>
                </div>

                <div className={`flex items-center justify-between gap-2`}>
                    <div className="title | flex items-center gap-1">
                        <GiGoat className={`w-5 justify-start`} />
                        <p className={`font-semibold`}>{postDetails.itemName}</p>
                    </div>
                    <span className={` text-sm font-light`}>({postDetails.details})</span>
                </div>
                <div className={`flex items-center gap-2`}>
                    <AiOutlineDollar className={`w-5 justify-start`} />
                    <p className={`text-primary font-bold`}> रु-{commaSeprator(postDetails.price)}</p>
                </div>
                <div className={`flex flex-col gap-0.5`}>
                    <div className={`flex items-center gap-2`}>
                        <AiOutlineClockCircle size={`0.8em`} className={`w-5 justify-start`} />
                        <p className={`font-bold text-gray-900 text-xs`}>{timeParser(postDetails.updatedAt)}</p>
                    </div>
                    <div className={`flex items-center gap-2`}>
                        <LuMapPin size={`0.8em`} className={`w-5 justify-start`} />
                        <p className={`font-bold text-gray-900 text-xs`}>{postDetails.location}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MarketCard;