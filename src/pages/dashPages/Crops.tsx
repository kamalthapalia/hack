import DashMenuLayout from "../../components/DashMenuLayout.tsx";
import BlogCardGroup from "../../components/subComponent/UserBlog/BlogCardGroup.tsx";

const Crops = () => {
    return (
        <div>
            <DashMenuLayout title={`Crops`}>
                <BlogCardGroup title=""/>
            </DashMenuLayout>
        </div>
    );
};

export default Crops;