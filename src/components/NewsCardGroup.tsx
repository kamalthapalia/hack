import { useEffect } from "react";
import NewsCard from "./subComponent/NewsCard";
import axios from "axios";

const NewsCardGroup = () => {
    // const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const data = await axios.get(`${import.meta.env.VITE_API_URL}?api_key=${import.meta.env.VITE_NEWS_API_KEY}`)

            console.log(data)
        }

        fetchNews()
    })


    return (
        <div className={` container mx-auto px-4`}>
            {/* <p className={`font-semibold my-10 text-lg `}>News</p> */}
            <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    );
};

export default NewsCardGroup;