import { ChangeEvent, useRef} from "react";
import { FcAddImage } from "react-icons/fc";
import { Link, NavLink, Outlet } from "react-router-dom";

import DashMenuLayout from "../../components/DashMenuLayout.tsx";
import { useAuth } from "../../hooks/AuthHook.ts";

import { serverApi } from "../../utils/axios.ts";

const UserProfile = () => {
    const picRef = useRef<HTMLInputElement>(null);
    const { user, setUser } = useAuth();

    const handleUserImage = () => {
        picRef.current?.click();
    }

    // file upload
    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files || picRef.current?.files;
        if (!files || files.length === 0) return;
        const selectedFile = files[0];
        const supportedTypes = ['image/jpeg', 'image/png'];

        const formData = new FormData();
        formData.append('profilePic', selectedFile);

        if (supportedTypes.includes(selectedFile.type)) {
            try {
                await serverApi.patch('/users/img', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                setUser(previous => ({...previous, profilePic: URL.createObjectURL(selectedFile)}))
            } catch (error) {
                console.log(error)
            }

        } else {
            alert("Only jpeg, jpg, png and gif image formats are supported!");
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <DashMenuLayout title={`Profile`}>
                <div className={`flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-md`}>
                    <div className="w-full flex justify-between items-center">
                        <div className={`flex items-center gap-4 mb-4`}>
                            <div className={`relative p-0.5 border-2 border-gray-400 rounded-full`}>
                                <img
                                    className={`w-20 h-20 rounded-full object-cover`}
                                    src={user.profilePic}
                                    alt="Profile Avatar"
                                />
                                <input type="file" className=" hidden" ref={picRef} accept=".jpg, .jpeg, .png, image/jpeg, image/png" onChange={handleFileChange} />
                                <FcAddImage className="absolute bottom-1 right-2 text-2xl cursor-pointer" onClick={handleUserImage} />
                            </div>
                            <div>
                                <p className={`text-xl font-semibold`}>{user.username}</p>
                                <p className={`text-sm font-semibold text-gray-500`}>{user.type ?? "Farmer"}</p>
                            </div>
                        </div>

                        <div className="center-child | flex-col gap-2">
                            <Link to={'/blog/create'}
                                className={`bg-blue-500 text-white w-fit font-bold py-1 px-10 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300`}>
                                Create Blog
                            </Link>
                            <Link to={'/product/create'}
                                className={`bg-blue-500 text-white w-fit font-bold py-1 px-10 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300`}>
                                Create Product
                            </Link>
                        </div>
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

            <div className=" px-8 sm:px-16 ">
                <div className="navigation | flex text-white bg-slate-700 rounded-sm mb-4">
                    <NavLink
                        to="/dash/profile/me/blogs"
                        className={({ isActive }) => (isActive ? 'bg-blue-400 px-4' : 'px-4 bg-none')}
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        to="/dash/profile/me/products"
                        className={({ isActive }) => (isActive ? 'bg-blue-400 px-4' : 'px-4 bg-none')}
                    >
                        Products
                    </NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default UserProfile;