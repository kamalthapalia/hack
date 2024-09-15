import { useEffect, useState } from "react";
import Hero from "./Hero.tsx";
import MarketCardGroup from "./MarketCardGroup.tsx";
import BlogCardGroup from "./subComponent/UserBlog/BlogCardGroup.tsx";

import type { BlogType, MarketPlaceType, MarketPlacePostApiType } from "../definations/apiTypes.ts";
import { serverApi } from "../utils/axios.ts";
import { isAxiosError } from "axios";

const LandingPage = () => {
    const [allBlogs, setAllBlogs] = useState<BlogType[]>([])
    const [marketPosts, setMarketPosts] = useState([] as MarketPlacePostApiType[]);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // marketPlace 
        async function fetchData() {
            setLoading(true)
            try {
                const res: MarketPlaceType = await serverApi.get('/marketplace');
                // console.log(res.data)
                setMarketPosts(res.data.data)
            }
            catch (error) {
                if (isAxiosError(error)) {
                    setError('An unexpected error occured');
                } else {
                    setError('An unexpected error occurred');
                }
            }
            setLoading(false);
        }

        // blogs
        const fetchUserBlogs = async () => {
            const res = await serverApi.get(`/blog`);
            setAllBlogs(res.data.data as BlogType[])
        }

        fetchData();
        fetchUserBlogs()
    }, [])

    return (
        <div className="flex flex-col gap-10">
            <Hero />
            <MarketCardGroup title="Latest Marketplace Items" marketPosts={marketPosts} error={error} loading={loading}/>
            <BlogCardGroup isOnHome={true} blogsArray={allBlogs} title={"User Blogs"} />
        </div>
    );
};

export default LandingPage;