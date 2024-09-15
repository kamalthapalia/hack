import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { serverApi } from "../../../utils/axios";
import { BlogType } from "../../../definations/apiTypes";

const UpdateBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })

    const handleFormDataChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await serverApi.patch(`/blog/${id}`, formData)
            navigate('/dash/profile/me/blogs')
        } catch (error) {
            alert("Error occured")
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await serverApi.get(`/blog/user/${id}`);
                const blogData = res.data.data as BlogType;
                setFormData({
                    title: blogData.title,
                    body: blogData.body
                })
            } catch (error) {
                console.log(error)
                alert('TERO POST HOINA YO. MUG')
            }
        }
        fetchBlog();
    }, [id])

    return (
        <form onSubmit={e => handleSubmit(e)} className={`w-full max-w-[600px] container mx-auto my-10`}>
            <p className={` text-lg font-semibold mb-4`}>Create a new Blog.</p>
            <div className={`flex flex-col gap-4`}>
                <div className={`flex flex-col gap-1.5`}>
                    <label className={`font-semibold`} htmlFor="title">Title</label>
                    <input value={formData.title} onChange={e => handleFormDataChange(e)}
                        className={`border rounded-md border-cyan-600  focus-within:border-cyan-500 p-2 py-1 outline-none`}
                        placeholder={`Enter a title`}
                        type="text" name="title" id="title"
                        maxLength={150}
                    />
                </div>
                <div className={`flex flex-col gap-1.5`}>
                    <label className={`font-semibold`} htmlFor="title">Body</label>
                    <textarea value={formData.body} onChange={e => handleFormDataChange(e)}
                        className={`border rounded-md border-cyan-600  focus-within:border-cyan-500 h-[300px] p-2 py-1 outline-none resize-none`}
                        placeholder={`Enter blog content.`}
                        name="body"
                        maxLength={2000}
                    />
                </div>
                <button type="submit" className={`w-fit bg-blue-500 hover:bg-blue-600 text-white transition rounded px-14 py-2`}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UpdateBlog;