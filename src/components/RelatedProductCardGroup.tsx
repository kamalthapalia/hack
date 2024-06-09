import RelatedProdCard from "./RelatedProdCard.tsx";

const RelatedProductCardGroup = () => {
    return (
        <div className={`flex flex-col w-full gap-5`}>
            <p className={`font-semibold mb-10 text-lg`}>Recently added</p>
            <RelatedProdCard/>
            <RelatedProdCard/>
            <RelatedProdCard/>
            <RelatedProdCard/>
            <RelatedProdCard/>
            <RelatedProdCard/>
        </div>
    );
};

export default RelatedProductCardGroup;