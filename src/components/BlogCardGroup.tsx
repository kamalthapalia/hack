import BlogCard from "./BlogCard.tsx";

const BlogCardGroup = () => {
    return (
        <div className={` container mx-auto`}>
            <p className={`font-semibold my-10 text-lg `}>News</p>
            <div className={`grid grid-cols-4 gap-8`}>
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