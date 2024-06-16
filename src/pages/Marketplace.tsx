import { Suspense } from "react";
import MarketCardGroup from "../components/MarketCardGroup.tsx";

const Marketplace = () => {
    return (
        <div>
            <Suspense fallback={<h2>Loading</h2>}>
                <MarketCardGroup/>
            </Suspense>
        </div>
    );
};

export default Marketplace;