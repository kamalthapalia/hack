import DashMenuLayout from "../../components/DashMenuLayout.tsx";
import AnimalCardGroup from "../../components/AnimalCardGroup.tsx";

const Animals = () => {
    return (
        <div>
            <DashMenuLayout title={`Animals`}>
                <AnimalCardGroup/>
            </DashMenuLayout>
        </div>
    );
};

export default Animals;