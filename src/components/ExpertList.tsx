import ExpertCard from "./ExpertCard.tsx";

const ExpertList = () => {
    return (
        <div className={`grid grid-cols-3 gap-10`}>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
        </div>
    );
};

export default ExpertList;