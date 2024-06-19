// Icons
import { GiGoat } from "react-icons/gi";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
// types
import { PostApiType } from "../definations/apiTypes";
// utils
import { timeParser } from "../utils/timeParser";
import { commaSeprator } from "../utils/commaSeparator";

const MarketCard = ({ postDetails }: { postDetails: PostApiType }) => {

    return (
        <div className={`cardAnimation | flex flex-col gap-4`}>
            <img
                className={`h-[400px] w-full object-cover rounded-md`}
                // src={`${postDetails.}`}
                src="https://images.pexels.com/photos/14717335/pexels-photo-14717335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="" />
            <div>
                <div className={`flex items-center gap-2`}>
                    <GiGoat className={`w-5 justify-start`} />
                    <p className={`font-semibold`}>{postDetails.itemName}</p>
                </div>
                <div className={`flex items-center gap-2`}>
                    <AiOutlineDollar className={`w-5 justify-start`} />
                    <p className={`text-primary font-bold`}> रु-{commaSeprator(postDetails.price)}</p>
                </div>
                <div className={`flex flex-col gap-0.5`}>
                    <div className={`flex items-center gap-2`}>
                        <AiOutlineClockCircle size={`0.8em`} className={`w-5 justify-start`} />
                        <p className={`font-bold text-gray-900 text-xs`}>{timeParser(postDetails.date)}</p>
                    </div>
                    <div className={`flex items-center gap-2`}>
                        <LuMapPin size={`0.8em`} className={`w-5 justify-start`} />
                        <p className={`font-bold text-gray-900 text-xs`}>{postDetails.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketCard;