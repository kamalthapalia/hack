import {TiUserOutline} from "react-icons/ti";

const CommentCard = () => {
    return (
        <div className={`flex flex-col gap-1     bg-gray-100 p-2 rounded-md`}>
            <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-500 rounded-full text-white">
                    <TiUserOutline className="w-8 h-8"/>
                </div>
                <div>
                    <p className={`font-bold text-sm`}>Niggendra Bahadur</p>
                    <p className={`text-xs font-medium text-gray-700`}>1 day ago</p>
                </div>
            </div>
            <div className={`bg-gray-100 p-2 rounded-md min-w-80  font-medium text-gray-700 text-sm`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis consequatur debitis id,
                incidunt magni necessitatibus nesciunt odio quia ratione!
            </div>
        </div>
    );
};

export default CommentCard;