import { TfiWrite } from "react-icons/tfi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { BlogType } from "../definations/apiTypes.ts";
import { serverApi } from "../utils/axios.ts";
import { timeParser } from "../utils/timeParser.ts";
import BlogCard from "./subComponent/UserBlog/BlogCard.tsx";

const BlogPage = ({isOnHome}: {isOnHome: boolean}) => {
    const { id } = useParams();
    const [blog, setBlog] = useState<BlogType>({} as BlogType);
    const [userBlogs, setUserBlogs] = useState<BlogType[]>([]);

    useEffect(() => {
        const getSingleBlogAndOthers = async () => {
            try {
                const res = await serverApi.get(`/blog/${id}`);
                setBlog(res.data.data as BlogType)

                const sameFromUserRes = await serverApi.get(`/blog/user-related/${res.data.data.userId}`);
                // TODO: Same blog twice issue
                setUserBlogs(sameFromUserRes.data.data as BlogType[])
            } catch (error) {
                console.log(error)
            }
        }
        getSingleBlogAndOthers();
    }, [id])

    return (
        <div className="max-w-[1000px] w-full container flex flex-col gap-16 mx-auto my-10 px-2 sm:px-8">
            <div>
                <img
                    className="w-full h-[750px] object-cover"
                    src="https://images.pexels.com/photos/1509607/pexels-photo-1509607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Blog cover"
                />
                <div className="flex flex-col gap-1.5 mt-4">
                    <div className="flex  gap-2 text-sm font-semibold text-gray-700">
                        <Link to={`/dash/profile/${blog.userId}`} className="text-blue-700 font-semibold flex gap-2 items-center">
                            <TfiWrite />
                            <p>{blog.createdBy}</p>
                        </Link>
                        <div className={`flex gap-2 items-center`}>
                            <AiOutlineClockCircle />
                            <p>{timeParser(blog.updatedAt)}</p>
                        </div>
                    </div>
                    <h1 className="font-bold text-lg mt-2">{blog.title}</h1>
                    <p className="font-medium text-gray-700 mt-2">
                        {blog.body}
                    </p>
                </div>
            </div>

            <hr />

            <div>
                <h1 className=" text-xl font-semibold">Others from the user :</h1>
                <div className={`grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 ms-3`}>
                    {userBlogs.map(blog => (
                        <BlogCard key={blog._id} isOnHome={isOnHome} blog={blog} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
