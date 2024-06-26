import {AiOutlineClockCircle, AiOutlineDollar} from "react-icons/ai";
import {LuMapPin} from "react-icons/lu";
import {GiGoat} from "react-icons/gi";
import { MarketPlacePostApiType } from "../definations/apiTypes";
import { timeParser } from "../utils/timeParser";
import { commaSeprator } from "../utils/commaSeparator";
import { Link } from "react-router-dom";

const RelatedProdCard = ({product}: {product: MarketPlacePostApiType}) => {
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
                        <p className={`font-semibold`}>{product.itemName}</p>
                    </div>
                    <div className={`flex items-center gap-2`}>
                        <AiOutlineDollar className={`w-5 h-5`}/>
                        <p className={`text-primary font-bold`}> रु-{commaSeprator(product.price)}</p>
                    </div>
                    <div className={`flex flex-col gap-0.5`}>
                        <div className={`flex items-center gap-2`}>
                            <AiOutlineClockCircle size={`0.8em`} className={`w-5 h-5`}/>
                            <p className={`font-bold text-gray-900 text-xs`}>{timeParser(product.updatedAt)}</p>
                        </div>
                        <div className={`flex items-center gap-2`}>
                            <LuMapPin size={`0.8em`} className={`w-5 h-5`}/>
                            <p className={`font-bold text-gray-900 text-xs`}>{product.location}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/product/${product._id}`} className={`bg-blue-400 hover:bg-blue-500 text-white outline-none text-sm font-medium transition border-gray-500 w-fit px-4 py-1 rounded-sm`}>See
                    product</Link>
            </div>
        </div>
    );
};

export default RelatedProdCard;