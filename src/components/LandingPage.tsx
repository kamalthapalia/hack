import Hero from "./Hero.tsx";
import MarketCardGroup from "./MarketCardGroup.tsx";
import BlogCardGroup from "./subComponent/UserBlog/BlogCardGroup.tsx";

const LandingPage = () => {
    return (
        <div className="flex flex-col gap-10">
            <Hero />
            <MarketCardGroup />
            <BlogCardGroup title={"User Blogs"}/>
        </div>
    );
};

export default LandingPage;