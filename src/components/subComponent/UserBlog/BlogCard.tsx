import { Link, useNavigate } from "react-router-dom";
import { BlogType } from "../../../definations/apiTypes";
import { timeParser } from "../../../utils/timeParser";
import { useAuth } from "../../../hooks/AuthHook";
import { serverApi } from "../../../utils/axios";

const BlogCard = ({ blog }: { blog: BlogType }) => {
    const { user } = useAuth();
    const updatedTime = timeParser(blog.updatedAt);
    const navigate = useNavigate()

    const handleDelete = async() => {
        try {
            await serverApi.delete(`/blog/${blog._id}`);
            navigate('/dash/profile/me')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Link to={`/blog/${blog._id}`} className={`cardAnimation | flex flex-col justify-between shadow-md shadow-slate-300 gap-4 p-3 rounded-lg`}>
            <div className={`flex flex-col gap-1.5`}>
                <div className={`flex justify-between items-center text-sm mt-2 font-semibold text-gray-700`}>
                    <p>{blog.createdBy}</p>
                    <p>{updatedTime}</p>
                </div>
                <p className={`font-bold leading-5`}>{blog.title}</p>
                <p className={`text-sm font-medium text-gray-700 line-clamp-3`}>{blog.body}</p>
            </div>

            <div className=" flex gap-1 justify-between text-white">
                { user.userId == blog.userId && <Link to={`/blog/update/${blog._id}`} className=" bg-blue-500 px-3 rounded-sm">Update</Link>
                }
                {user.userId == blog.userId &&
                    <button onClick={handleDelete} className=" bg-rose-500 px-3 rounded-sm">Delete</button>}

            </div>

        </Link>
    );
};

export default BlogCard;