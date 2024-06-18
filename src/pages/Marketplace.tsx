import DashMenuLayout from "../components/DashMenuLayout.tsx";
import MarketCardGroup from "../components/MarketCardGroup.tsx";

const Marketplace = () => {
    return (
        <DashMenuLayout title="Marketplace">
            <MarketCardGroup />
        </DashMenuLayout>
    );
};

export default Marketplace;