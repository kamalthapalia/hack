import { useEffect, useState } from "react";
import Hero from "./Hero.tsx";
import MarketCardGroup from "./MarketCardGroup.tsx";
import BlogCardGroup from "./subComponent/UserBlog/BlogCardGroup.tsx";

import type{ BlogType } from "../definations/apiTypes.ts";
import { serverApi } from "../utils/axios.ts";

const LandingPage = () => {
    const [allBlogs, setAllBlogs] = useState<BlogType[]>([])

    useEffect(() => {
        const fetchUserBlogs = async () => {
            const res = await serverApi.get(`/blog`);
            setAllBlogs(res.data.data as BlogType[])
        }
        fetchUserBlogs()
    }, [])

    return (
        <div className="flex flex-col gap-10">
            <Hero />
            <MarketCardGroup />
            <BlogCardGroup blogsArray={allBlogs} title={"User Blogs"} />
        </div>
    );
};

export default LandingPage;