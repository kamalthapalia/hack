import AnimalCard from "./AnimalCard.tsx";

const AnimalCardGroup = () => {
    return (
        <div>
            <p className={`font-semibold text-lg text-gray-800`}>My Animals</p>
            <div className={`grid grid-cols-4 gap-8 my-2`}>
                <AnimalCard/>
                <AnimalCard/>
                <AnimalCard/>
                <AnimalCard/>
            </div>

        </div>
    );
};

export default AnimalCardGroup;