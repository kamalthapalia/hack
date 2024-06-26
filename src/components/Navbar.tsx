import {BiUser} from "react-icons/bi";
import {LuWheat} from "react-icons/lu";
import {Link} from "react-router-dom";
import { useSocket } from "../hooks/SocketHook";

const Navbar = () => {
    const { unseenFromUsers } = useSocket();
    
    return (
        <div
            className={`col-span-2 sticky top-0 border-b  w-full z-5 py-4 px-14 z-[99999] bg-white transition-all`}>
            <div className={`flex justify-between items-end`}>
                <div className={`flex items-baseline gap-8`}>
                    <Link to={`/`}>
                        <div className={`flex items-baseline gap-3`}>
                            <LuWheat size={`2em`} className={`relative top-1`}/>
                            <p className={`text-2xl uppercase font-bold`}>Kisan</p>
                        </div>
                    </Link>
                    <div>
                        <ul className={`flex items-center gap-2 font-semibold`}>
                            <Link to={`/market`}>
                                <li className={`border-b-2 border-gray-500/0 hover:border-blue-400 px-1 transition underline-offset-2 cursor-pointer`}>Marketplace</li>
                            </Link>
                            <Link to={`/news`}>
                                <li className={`border-b-2 border-gray-500/0 hover:border-blue-400 px-1 transition underline-offset-2 cursor-pointer`}>News</li>
                            </Link>
                            <Link to={`/about`}>
                                <li className={`border-b-2 border-gray-500/0 hover:border-blue-400 px-1 transition underline-offset-2 cursor-pointer`}>About</li>
                            </Link>

                        </ul>
                    </div>
                </div>
                <div>
                    <Link to={`/dash`}>
                        <div
                            className={`relative flex items-center font-medium rounded-full p-2 gap-1 bg-gray-200 cursor-pointer px-2`}>
                            <BiUser size={`1.2em`}/>
                            {unseenFromUsers.length > 0 && <span className="absolute h-3 w-3 left-1 bottom-0 rounded-full bg-rose-400"></span>}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
