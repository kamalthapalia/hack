import { useEffect, useState } from "react";

import type { MarketPlaceType, MarketPlacePostApiType } from "../../definations/apiTypes.ts";
import { serverApi } from "../../utils/axios.ts";
import { isAxiosError } from "axios";
import MarketCardGroup from "../../components/MarketCardGroup";


const UserMarketPlaceProduct = () => {
  const [marketPosts, setMarketPosts] = useState([] as MarketPlacePostApiType[]);
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // marketPlace 
    async function fetchData() {
      setLoading(true)
      try {
        const res: MarketPlaceType = await serverApi.get('/marketplace/posts');
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
    <div>
      <MarketCardGroup title="Latest Marketplace Items" marketPosts={marketPosts} error={error} loading={loading} />
    </div>
  )
}

export default UserMarketPlaceProduct