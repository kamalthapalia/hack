import { useEffect, useState } from "react";
import NewsCard from "./subComponent/NewsCard";
import axios, { isAxiosError } from "axios";
import { NewsApiType, NewsDataType } from "../definations/apiTypes";

const NewsCardGroup = () => {
    const [news, setNews] = useState([] as NewsDataType[]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await axios.get(`${import.meta.env.VITE_API_URL}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`) as NewsApiType
                // console.log(data.data.articles)
                setNews(data.data.articles)
    
            } catch (error) {
                if(isAxiosError (error)){
                    console.log('Axios error \n',error);
                }
                console.log(error)
            }
        }

        fetchNews()
    },[])


    return (
        <div className={` container mx-auto px-4`}>
            {/* <p className={`font-semibold my-10 text-lg `}>News</p> */}
            <div className={`grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4`}>
                {
                    news.map((news,i) => (
                        <NewsCard key={i} news={news} />
                    ))
                }
            </div>
        </div>
    );
};

export default NewsCardGroup;