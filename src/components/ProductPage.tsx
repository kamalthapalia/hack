import {AiOutlineClockCircle} from "react-icons/ai";
import {LuMapPin} from "react-icons/lu";
import {BsChatText} from "react-icons/bs";
import RelatedProductCardGroup from "./RelatedProductCardGroup.tsx";

const ProductPage = () => {
    return (
        <div className={`container mx-auto my-10`}>
            <div className={`grid md:grid-cols-2  relative gap-10`}>
                <div className={`flex top-0 flex-col gap-3`}>
                    <img
                        className={`h-[500px] w-full object-cover`}
                        src="https://images.pexels.com/photos/14717335/pexels-photo-14717335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""/>
                    <div className={`flex flex-col gap-1.5`}>
                        <div className={`flex justify-between items-center font-bold`}>
                            <p>Mountain Goat</p>
                            <p>रु-50,000</p>
                        </div>
                        <div>
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
                        <p className={`font-semibold text-gray-700 text-sm`}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing
                            elit. Aliquam
                            animi commodi cum
                            cupiditate debitis eius fugiat, molestias natus optio pariatur, perspiciatis quae, tempore
                            totam vero?</p>
                    </div>
                    <button
                        className={`flex items-center gap-2 font-semibold px-10 py-2 bg-blue-500 w-fit text-white rounded-md`}>
                        <BsChatText/>Chat
                    </button>
                </div>
                <div className={`h-[80vh] md:overflow-y-scroll`}>
                    <RelatedProductCardGroup/>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;