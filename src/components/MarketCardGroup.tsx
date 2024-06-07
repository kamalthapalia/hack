import MarketCard from "./MarketCard.tsx";

const MarketCardGroup = () => {
    return (
        <div className={` container mx-auto`}>
            <p className={`font-semibold my-10 text-lg`}>Recently added</p>
            <div className={`grid grid-cols-4 gap-8`}>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
            </div>
        </div>
    );
};

export default MarketCardGroup;