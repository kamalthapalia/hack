import { Link, useNavigate } from "react-router-dom";
import { BlogType } from "../../../definations/apiTypes";
import { timeParser } from "../../../utils/timeParser";
import { useAuth } from "../../../hooks/AuthHook";
import { serverApi } from "../../../utils/axios";

const BlogCard = ({ blog, isOnHome }: { blog: BlogType, isOnHome: boolean }) => {
    const { user } = useAuth();
    const updatedTime = timeParser(blog.updatedAt);
    const navigate = useNavigate()

    const handleUpdate = async () => {
        navigate(`/blog/update/${blog._id}`);
    }

    const handleDelete = async () => {
        try {
            await serverApi.delete(`/blog/${blog._id}`);
            const profileLink = '/dash/profile/me/blogs'
            const isOnProfile = location.href.endsWith(profileLink)

            if (isOnProfile)
                navigate('/')
            else
                navigate(profileLink)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`cardAnimation | flex flex-col justify-between shadow-md shadow-slate-300 gap-4 p-3 rounded-lg`}>
            <Link to={`/blog/${blog._id}`} className={`flex flex-col gap-1.5`}>
                <div className={`flex justify-between items-center text-sm mt-2 font-semibold text-gray-700`}>
                    <p>{blog.createdBy}</p>
                    <p>{updatedTime}</p>
                </div>
                <p className={`font-bold leading-5`}>{blog.title}</p>
                <p className={`text-sm font-medium text-gray-700 line-clamp-3`}>{blog.body}</p>
            </Link>

            {
                !isOnHome && (
                    <div className=" flex gap-1 justify-between text-white">
                        {user.userId == blog.userId && <div onClick={handleUpdate} className=" bg-blue-500 px-3 rounded-sm">Update</div>
                        }
                        {user.userId == blog.userId &&
                            <button onClick={handleDelete} className=" bg-rose-500 px-3 rounded-sm">Delete</button>}

                    </div>
                )
            }

        </div>
    );
};

export default BlogCard;