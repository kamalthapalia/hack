import DashMenuLayout from "../../components/DashMenuLayout.tsx";
import NewsCardGroup from "../../components/NewsCardGroup.tsx";

const Crops = () => {
    return (
        <div>
            <DashMenuLayout title={`Crops`}>
                <NewsCardGroup />
            </DashMenuLayout>
        </div>
    );
};

export default Crops;