import { useEffect, useState } from "react";
// components
import MarketCard from "./MarketCard.tsx";
import CardSkeleton from "./subComponent/CardSkeleton.tsx";
// utils
import { serverApi } from "../utils/axios.ts";
import { isAxiosError } from "axios";

// types
import type{ MarketPlaceType, PostApiType } from "../definations/apiTypes.ts";

const MarketCardGroup = () => {
    const [marketPosts, setMarketPosts] = useState([] as PostApiType[]);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true)

            try {
                const res: MarketPlaceType = await serverApi.get('/marketplace');
                console.log(res.data)
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
        fetchData();
    }, [])

    return (
        <div className={` container mx-auto px-4`}>
            <p className={`font-semibold mb-6 text-lg`}>Marketplace Items</p>
            <div className={`grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4`}>
                {loading ? (
                    <div className="flex justify-center items-center h-64 w-full max-w-[600px]">
                        <CardSkeleton />
                    </div>
                ) : (
                    <>
                        {marketPosts.map(postDetails => (
                            <MarketCard key={postDetails._id} postDetails={postDetails} />
                        ))}
                    </>
                )}
                <span className=" text-rose-500 text-lg">{error}</span>
            </div>
        </div>
    );
};

export default MarketCardGroup;