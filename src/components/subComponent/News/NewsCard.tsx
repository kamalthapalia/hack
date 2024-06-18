const BlogCard = () => {
    return (
        <div className={`cursor-pointer shadow-slate-200`}>
            <div className={`flex flex-col gap-1.5`}>
                <img
                    className="w-full h-[750px] object-cover"
                    src="https://images.pexels.com/photos/1509607/pexels-photo-1509607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Blog cover"
                />
                
                <div className={`flex justify-between items-center text-sm mt-2 font-semibold text-gray-700`}>
                    <p>Raja Hero</p>
                    <p>1 min ago</p>
                </div>
                <p className={`font-bold`}>New Strain of Rice Blast Fungus Threatens Global Food Security</p>
                <p className={`text-sm font-medium text-gray-700 line-clamp-2`}>Researchers at the International Rice
                    Research
                    Institute (IRRI)
                    have issued a
                    warning about a newly
                    emerged strain of the rice blast fungus that is showing increased resistance to common fungicides.
                    Rice blast is one of the most devastating diseases affecting rice crops worldwide, causing annual
                    losses of over $70 billion.</p>
            </div>

        </div>
    );
};

export default BlogCard;