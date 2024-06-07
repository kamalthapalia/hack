const ChatCard = () => {
    return (
        <div className={`flex items-end  gap-2 bg-gray-100 p-3 rounded-lg cursor-pointer`}>
            <div className={`p-0.5 border-2 border-gray-400 rounded-full`}>
                <img className={`w-10 h-10 rounded-full object-cover`}
                     src="https://media.post.rvohealth.io/wp-content/uploads/2023/11/usher-1296x728-header-1296x729.jpg"
                     alt=""/>
            </div>
            <div className={``}>
                <p className={`font-semibold`}>Usher</p>
                <p className={`text-xs font-semibold text-gray-500`}>(Expert)</p>
            </div>
        </div>
    );
};

export default ChatCard;