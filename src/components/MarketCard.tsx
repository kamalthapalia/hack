import { GiGoat } from "react-icons/gi";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";

// types
import { PostType } from "./MarketCardGroup";

const MarketCard = ({ postDetails }: { postDetails: PostType }) => {

    const commaSeprator = (value: number) => {
        const stringValue = value.toString();
        const [integer, decimal] = stringValue.split('.');
        const formattedIntegerPart = integer
            .split('')
            .reverse()
            .join('')
            .match(/.{1,3}/g)
            ?.join(',')
            .split('')
            .reverse()
            .join('') || '';

        // Combine the integer part with the decimal part if it exists
        const formattedStr = decimal ? `${formattedIntegerPart}.${decimal}` : formattedIntegerPart;
        return formattedStr;
    }

    const timeParaser = (date: Date) => {
        date = new Date(date);
        return date.toLocaleDateString('en-gb', {year: "numeric", month: "short", day: "numeric"})
          
    }


    return (
        <div className={`cursor-pointer shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] p-4 rounded-lg flex flex-col gap-4 ease-linear duration-150 hover:scale-105`}>
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
                        <p className={`font-bold text-gray-900 text-xs`}>{timeParaser(postDetails.date)}</p>
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