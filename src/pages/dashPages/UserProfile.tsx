import { useEffect, useState } from "react";
import DashMenuLayout from "../../components/DashMenuLayout.tsx";
import { useAuth } from "../../hooks/AuthHook.ts";
import BlogCardGroup from "../../components/subComponent/UserBlog/BlogCardGroup.tsx";
import { serverApi } from "../../utils/axios.ts";
import { BlogType } from "../../definations/apiTypes.ts";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user } = useAuth();
    const [userBlogs, setUserBlogs] = useState<BlogType[]>([]);

    useEffect(() => {
        if (user.userId) {
            const fetchUserBlogs = async () => {
                const res = await serverApi.get(`/blog/user/${user.userId}`);
                setUserBlogs(res.data.data as BlogType[])
            }
            fetchUserBlogs()
        }
    }, [user])

    return (
        <div>
            <DashMenuLayout title={`Profile`}>
                <div className={`flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-md`}>
                    <div className="w-full flex justify-between items-center">
                        <div className={`flex items-center gap-4 mb-4`}>
                            <div className={`p-0.5 border-2 border-gray-400 rounded-full`}>
                                <img
                                    className={`w-20 h-20 rounded-full object-cover`}
                                    src="https://media.post.rvohealth.io/wp-content/uploads/2023/11/usher-1296x728-header-1296x729.jpg"
                                    alt="Profile Avatar"
                                />
                            </div>
                            <div>
                                <p className={`text-xl font-semibold`}>{user.username}</p>
                                <p className={`text-sm font-semibold text-gray-500`}>{user.type ?? "Farmer"}</p>
                            </div>
                        </div>

                        <Link to={'/blog/create'}
                            className={`bg-blue-500 text-white w-fit font-bold py-1 px-10 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300`}>
                            Create Blog
                        </Link>
                    </div>
                    <div className={`flex flex-col gap-2 w-full`}>
                        <div className={`bg-white p-4 rounded-lg shadow-inner`}>
                            <h3 className={`text-lg font-semibold mb-2`}>About</h3>
                            <p className={`text-sm text-gray-700`}>{user.description || `User Description`}</p>
                        </div>
                        <div className={`bg-white p-4 rounded-lg shadow-inner`}>
                            <h3 className={`text-lg font-semibold mb-2`}>Contact Information</h3>
                            <p className={`text-sm text-gray-700`}>Email: {user.email}</p>
                            <p className={`text-sm text-gray-700`}>Phone: {user.phoneNumber}</p>
                        </div>

                        {/* TODO: Future goal */}
                        {/* <div className={`bg-white p-4 rounded-lg shadow-inner`}>
                            <h3 className={`text-lg font-semibold mb-2`}>Additional Information</h3>
                            Will add in future if seems ok
                            <p className={`text-sm text-gray-700`}>Any other relevant information can be added here,
                                such as links to social media profiles, portfolio, etc.</p>
                        </div> */}
                    </div>
                </div>
            </DashMenuLayout>

            <BlogCardGroup blogsArray={userBlogs} title={`${user.username}'s blogs`} />
        </div>
    );
};

export default UserProfile;