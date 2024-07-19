import { useEffect, useState } from "react";
import RelatedProdCard from "./RelatedProdCard.tsx";
import { MarketPlacePostApiType } from "../definations/apiTypes.ts";
import { serverApi } from "../utils/axios.ts";

const RelatedProductCardGroup = ({itemType}: {itemType: "animal" | "product" | "tool" | "machinery"}) => {
    const [relatedProduct, setRelatedProduct] = useState<MarketPlacePostApiType[]>([]);

    useEffect(()=> {
        const fetchRelatedProducts = async() => {
            try {
                const res = await serverApi.get(`/marketplace/related-item/${itemType}`)
                setRelatedProduct(res.data.data as MarketPlacePostApiType[]);
            } catch (error) {
                console.log(error)
            }
        }
        fetchRelatedProducts();
    }, [itemType])

    
    return (
        <div className={`flex flex-col w-full gap-4`}>
            <p className={`font-semibold mb-0 text-lg`}>Related Products / Items in the Marketplace</p>

            {
                relatedProduct.map(product=> (
                    <RelatedProdCard key={product._id} product={product}/>
                ))
            }
        </div>
    );
};

export default RelatedProductCardGroup;