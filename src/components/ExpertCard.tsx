import {BiChat} from "react-icons/bi";
import {GrUserWorker} from "react-icons/gr";
import {AiOutlineClockCircle} from "react-icons/ai";

const ExpertCard = () => {
    return (
        <div className={``}>
            <img
                className={`h-[250px] w-full object-cover`}
                src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""/>
            <div className={`flex flex-col`}>
                <p className={`font-bold`}>Raja Bahtarai</p>
                <p className={`text-sm font-semibold text-gray-700 line-clamp-2 flex items-center gap-2`}>
                    <GrUserWorker/>
                    Cow Expert and Technician
                </p>
                <p className={`text-sm font-semibold text-gray-700 line-clamp-2 flex items-center gap-2`}>
                    <AiOutlineClockCircle/>
                    5 years of experience
                </p>
                <button
                    className={`flex font-semibold items-center justify-center text-center my-2 rounded bg-blue-500 hover:bg-blue-600 transition text-white py-1.5`}>
                    <BiChat/>
                    Chat Now
                </button>
            </div>

        </div>
    );
};

export default ExpertCard;