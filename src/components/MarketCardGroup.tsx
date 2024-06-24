// components
import MarketCard from "./MarketCard.tsx";
import CardSkeleton from "./subComponent/CardSkeleton.tsx";

// types
import type { MarketPlacePostApiType } from "../definations/apiTypes.ts";

const MarketCardGroup = ({ marketPosts, error, loading, title }: { marketPosts: MarketPlacePostApiType[], error: string, loading: boolean, title: string }) => {

    return (
        <div className={` container mx-auto px-4`}>
            <p className={`font-semibold mb-6 text-lg`}>{title}</p>
            <div className={`grid xs:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 px-4`}>
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