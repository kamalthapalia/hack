import Hero from "./Hero.tsx";
import MarketCardGroup from "./MarketCardGroup.tsx";
import BlogCardGroup from "./BlogCardGroup.tsx";
import { Suspense } from "react";

const LandingPage = () => {
    return (
        <div>
            <Hero/>
            <Suspense fallback={<h2>hii</h2>}>
                <MarketCardGroup/>
            </Suspense>
            <BlogCardGroup/>
        </div>
    );
};

export default LandingPage;