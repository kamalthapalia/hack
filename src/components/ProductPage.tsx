import { AiOutlineClockCircle } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { BsChatText } from "react-icons/bs";
import RelatedProductCardGroup from "./RelatedProductCardGroup.tsx";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MarketPlacePostApiType } from "../definations/apiTypes.ts";
import { serverApi } from "../utils/axios.ts";
import { timeParser } from "../utils/timeParser.ts";
import NotFound from '/newsImgNotLoad.jpg';
import { fetchImg } from "../utils/fetcher.ts";

const ProductPage = () => {
    const [productImg, setProductImg] = useState(NotFound);

    const [product, setProduct] = useState<MarketPlacePostApiType>({} as MarketPlacePostApiType)
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await serverApi(`/marketplace/${itemId}`);
                setProduct(res.data.data as MarketPlacePostApiType);
    
                const profilePic = await fetchImg(`/marketplace/img/${res.data.data.pictureId}`);
                if (!profilePic) {
                    setProductImg(NotFound)
                } else {
                    setProductImg(profilePic)
                }
            } catch (error) {
                console.log('error')
                alert(error)
            }
        }
        fetchProduct();
    }, [itemId])

    if (!product._id)
        return <h2>Loading...</h2>

    return (
        <div className={`container mx-auto my-10 px-2 sm:px-8`}>
            <div className={`grid md:grid-cols-2 relative gap-10`}>

                <div className={`flex top-0 flex-col gap-3`}>
                    <img
                        className={`h-[500px] w-full object-cover`}
                        src={productImg}
                        alt="" />
                    <div className={`flex flex-col gap-2`}>
                        <div className={`flex justify-between items-center font-bold`}>
                            <p>{product.itemName}</p>
                            <p>रु-{product.price}</p>
                        </div>
                        <div>
                            <div className={`flex flex-col gap-0.5`}>
                                <div className={`flex items-center gap-2`}>
                                    <AiOutlineClockCircle size={`0.8em`} className={`w-5 justify-start`} />
                                    <p className={`font-bold text-gray-900 text-xs`}>{timeParser(product.updatedAt)}</p>
                                </div>
                                <div className={`flex items-center gap-2`}>
                                    <LuMapPin size={`0.8em`} className={`w-5 justify-start`} />
                                    <p className={`font-bold text-gray-900 text-xs`}>{product.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <span className={`font-semibold py-1 px-4 rounded-t-2xl rounded-b-xl ${product.type == 'sale' ? "bg-rose-200" : "bg-cyan-200"}`}>{product.type}</span>
                            <p className=" text-gray-700"> {product.details} </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Link to={`/dash/profile/${product.userId}`} className=" text-blue-700 font-semibold">By: {product.postedBy || "anonymous"}</Link>

                        <Link to={`/dash/chat/${product.userId}`}
                            className={`flex items-center gap-2 font-semibold px-10 py-2 bg-blue-500 w-fit text-white rounded-md`}>
                            <BsChatText />Chat
                        </Link>
                    </div>
                </div>
                {product.itemType && (
                    <div className={`h-[80vh] md:overflow-y-scroll`}>
                        <RelatedProductCardGroup itemType={product.itemType} />
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default ProductPage;