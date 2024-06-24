import { useEffect, useState } from "react";
import DashMenuLayout from "../components/DashMenuLayout.tsx";
import MarketCardGroup from "../components/MarketCardGroup.tsx";

import { MarketPlacePostApiType, MarketPlaceType } from "../definations/apiTypes.ts";

import { isAxiosError } from "axios";
import { serverApi } from "../utils/axios.ts";

const Marketplace = () => {
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
        
        fetchData();
    }, [])

    return (
        <DashMenuLayout title="Marketplace">
            <MarketCardGroup title="Latest Items" marketPosts={marketPosts} error={error} loading={loading}/>
        </DashMenuLayout>
    );
};

export default Marketplace;