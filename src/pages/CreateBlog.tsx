const CreateBlog = () => {
    return (
        <div className={`container mx-auto my-10`}>
            <p className={` text-lg font-semibold mb-8`}>Create a new Blog.</p>
            <div className={`flex flex-col gap-4`}>
                <div className={`flex flex-col gap-1.5`}>
                    <label className={`font-semibold`} htmlFor="title">Title</label>
                    <input className={`border rounded-lg border-gray-600/50 p-2 py-1 outline-none`}
                           placeholder={`Enter a title`}
                           type="text" name="title" id="title"/>
                </div>
                <div className={`flex flex-col gap-1.5`}>
                    <label className={`font-semibold`} htmlFor="title">Body</label>
                    <textarea className={`border rounded-lg border-gray-600/50 h-[300px] p-2 py-1 outline-none`}
                              placeholder={`Enter blog content.`}
                              name="title" id="title"/>
                </div>
                <button className={`w-fit bg-blue-500 hover:bg-blue-600 text-white transition rounded px-14 py-2`}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CreateBlog;