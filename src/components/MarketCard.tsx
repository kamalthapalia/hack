import {GiGoat} from "react-icons/gi";
import {AiOutlineClockCircle, AiOutlineDollar} from "react-icons/ai";
import {LuMapPin} from "react-icons/lu";

const MarketCard = () => {
    return (
        <div className={`cursor-pointer`}>
            <img
                className={`h-[400px] w-full object-cover`}
                src="https://images.pexels.com/photos/14717335/pexels-photo-14717335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""/>
            <div>
                <div className={`flex items-center gap-2`}>
                    <GiGoat className={`w-5 justify-start`}/>
                    <p className={`font-semibold`}>Mountain Goat</p>
                </div>
                <div className={`flex items-center gap-2`}>
                    <AiOutlineDollar className={`w-5 justify-start`}/>
                    <p className={`text-primary font-bold`}> रु-50,000</p>
                </div>
                <div className={`flex flex-col gap-0.5`}>
                    <div className={`flex items-center gap-2`}>
                        <AiOutlineClockCircle size={`0.8em`} className={`w-5 justify-start`}/>
                        <p className={`font-bold text-gray-900 text-xs`}>a day ago</p>
                    </div>
                    <div className={`flex items-center gap-2`}>
                        <LuMapPin size={`0.8em`} className={`w-5 justify-start`}/>
                        <p className={`font-bold text-gray-900 text-xs`}>Kathmandu</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketCard;