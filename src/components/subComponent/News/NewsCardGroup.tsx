import BlogCard from "./NewsCard.tsx";

const BlogCardGroup = () => {
    return (
        <div className={` container mx-auto px-4`}>
            <p className={`font-semibold my-10 text-lg `}>News</p>
            <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
    );
};

export default BlogCardGroup;