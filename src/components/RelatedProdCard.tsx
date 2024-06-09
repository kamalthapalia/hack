import {AiOutlineClockCircle, AiOutlineDollar} from "react-icons/ai";
import {LuMapPin} from "react-icons/lu";
import {GiGoat} from "react-icons/gi";

const RelatedProdCard = () => {
    return (
        <div className={`flex cursor-pointer`}>
            <img
                className={`h-[200px] w-[300px] object-cover`} // Adjust the height and width as necessary
                src="https://images.pexels.com/photos/14717335/pexels-photo-14717335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mountain Goat"/>
            <div className={`flex justify-between flex-col px-4`}>
                <div className={`flex flex-col gap-1.5`}>
                    <div className={`flex items-center gap-2`}>
                        <GiGoat className={`w-5 h-5`}/>
                        <p className={`font-semibold`}>Mountain Goat</p>
                    </div>
                    <div className={`flex items-center gap-2`}>
                        <AiOutlineDollar className={`w-5 h-5`}/>
                        <p className={`text-primary font-bold`}> रु-50,000</p>
                    </div>
                    <div className={`flex flex-col gap-0.5`}>
                        <div className={`flex items-center gap-2`}>
                            <AiOutlineClockCircle size={`0.8em`} className={`w-5 h-5`}/>
                            <p className={`font-bold text-gray-900 text-xs`}>a day ago</p>
                        </div>
                        <div className={`flex items-center gap-2`}>
                            <LuMapPin size={`0.8em`} className={`w-5 h-5`}/>
                            <p className={`font-bold text-gray-900 text-xs`}>Kathmandu</p>
                        </div>
                    </div>
                </div>
                <p className={`border hover:bg-gray-100 text-sm font-medium text-gray-700 transition border-gray-500 w-fit px-4 rounded-full`}>See
                    product</p>
            </div>
        </div>
    );
};

export default RelatedProdCard;