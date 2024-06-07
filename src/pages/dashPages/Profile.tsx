import DashMenuLayout from "../../components/DashMenuLayout.tsx";

const Profile = () => {
    return (
        <div>
            <DashMenuLayout title={`Profile`}>
                <div className={`flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-md`}>
                    <div className={`flex items-center gap-4 mb-4`}>
                        <div className={`p-0.5 border-2 border-gray-400 rounded-full`}>
                            <img
                                className={`w-20 h-20 rounded-full object-cover`}
                                src="https://media.post.rvohealth.io/wp-content/uploads/2023/11/usher-1296x728-header-1296x729.jpg"
                                alt="Profile Avatar"
                            />
                        </div>
                        <div>
                            <p className={`text-xl font-semibold`}>Usher</p>
                            <p className={`text-sm font-semibold text-gray-500`}>Expert</p>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-2 w-full`}>
                        <div className={`bg-white p-4 rounded-lg shadow-inner`}>
                            <h3 className={`text-lg font-semibold mb-2`}>About</h3>
                            <p className={`text-sm text-gray-700`}>Detailed profile description goes here. This can
                                include biography, interests, professional background, etc.</p>
                        </div>
                        <div className={`bg-white p-4 rounded-lg shadow-inner`}>
                            <h3 className={`text-lg font-semibold mb-2`}>Contact Information</h3>
                            <p className={`text-sm text-gray-700`}>Email: usher@example.com</p>
                            <p className={`text-sm text-gray-700`}>Phone: (123) 456-7890</p>
                        </div>
                        <div className={`bg-white p-4 rounded-lg shadow-inner`}>
                            <h3 className={`text-lg font-semibold mb-2`}>Additional Information</h3>
                            <p className={`text-sm text-gray-700`}>Any other relevant information can be added here,
                                such as links to social media profiles, portfolio, etc.</p>
                        </div>
                    </div>
                </div>
            </DashMenuLayout>
        </div>
    );
};

export default Profile;
