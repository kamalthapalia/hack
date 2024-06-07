import Hero from "./Hero.tsx";
import MarketCardGroup from "./MarketCardGroup.tsx";
import BlogCardGroup from "./BlogCardGroup.tsx";

const LandingPage = () => {
    return (
        <div>
            <Hero/>
            <MarketCardGroup/>
            <BlogCardGroup/>
        </div>
    );
};

export default LandingPage;