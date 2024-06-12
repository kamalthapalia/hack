import { useEffect, useState } from "react";
import MarketCard from "./MarketCard.tsx";
import { serverApi } from "../utils/axios.ts";
import { isAxiosError } from "axios";


export interface PostType {
    date: Date;
    details: string;
    itemName: string;
    location: string;
    pictureUrl: {
        path: string,
        name: string,
        _id: string
    },
    price: number;
    type: string;
    userId: string;
    __v: number;
    _id: string;
}

type MarketPlaceType = {
    data: {
        data: PostType[],
        message: string
    }
}


const MarketCardGroup = () => {
    const [marketPosts, setMarketPosts] = useState([] as PostType[]);
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchData() {
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
        }
        fetchData();
    }, [])

    return (
        <div className={` container mx-auto`}>
            <p className={`font-semibold my-10 text-lg`}>Recently added</p>
            <div className={`grid grid-cols-4 gap-8`}>
                {marketPosts.map(postDetails => (
                    <MarketCard key={postDetails._id} postDetails={postDetails} />
                ))}
                <span className=" text-rose-500 text-lg">{error}</span>
            </div>
        </div>
    );
};

export default MarketCardGroup;