import DashMenuLayout from "../components/DashMenuLayout.tsx";
import NewsCardGroup from "../components/NewsCardGroup.tsx";

const News = () => {
    return (
        <div>
            <DashMenuLayout title={`News`}>
                <NewsCardGroup />
            </DashMenuLayout>
        </div>
    );
};

export default News;