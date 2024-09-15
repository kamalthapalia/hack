import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className={`h-[99vh] relative`}>
            <div
                className={`absolute h-full inset-0 from-blue-200 to-white -z-50 bg-gradient-to-br`}></div>
            <div className={`grid grid-cols-2 h-full z-20`}>
                <div className={`flex items-center h-full relative`}>
                    <div
                        className={`w-96 absolute bottom-0 -z-50 bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-br-lg h-[600px] rounded-tr-full`}></div>
                    <div className={`ml-24 flex flex-col gap-6`}>
                        <p className={`text-5xl font-bold`}>Find Niggers at Cheap Prices</p>
                        <p className={`font-semibold text-gray-700`}>
                            We offer a carefully curated collection of high-quality niggers at affordable prices. Our
                            user-friendly platform makes it easy to find what you need, and our exceptional customer
                            service ensures a seamless shopping experience. Explore our range and discover the perfect
                            nigger for your requirements and budget.
                        </p>
                        <Link to={'/market'}
                            className={`bg-blue-500 text-white w-fit font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300`}>
                            Buy Now
                        </Link>
                    </div>
                </div>
                <div className={`h-full`}>
                    <img
                        className={`h-full w-full object-cover rounded-bl-full`}
                        src="https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
