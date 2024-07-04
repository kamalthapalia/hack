import BlogCardGroup from "../components/subComponent/UserBlog/BlogCardGroup.tsx";

const Blogs = ({isOnHome} : {isOnHome:boolean}) => {
    

    return (
        <div>
            <BlogCardGroup isOnHome={isOnHome} blogsArray={[]} title="" />
        </div>
    );
};

export default Blogs;