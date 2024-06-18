import BlogCard from "./BlogCard.tsx";

const BlogCardGroup = ({title}: {title: string}) => {
    return (
        <div className={` container mx-auto px-4`}>
            <p className={`font-semibold mb-6 text-lg `}>{title}</p>
            <div className={`grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 ms-3`}>
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