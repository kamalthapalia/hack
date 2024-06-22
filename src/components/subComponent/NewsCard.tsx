import { Link } from "react-router-dom";
import { NewsDataType } from "../../definations/apiTypes";
import { timeParser } from "../../utils/timeParser";

const NewsCard = ({ news }: { news: NewsDataType }) => {
    return (
        <Link to={news.url} className={` cardAnimation`}>
            <div>
                <img
                    className={`h-[250px] w-full object-cover`}
                    src={news.urlToImage || "/newsImgNotLoad.jpg"}
                    alt="Image for news" />
                <div className={`flex flex-col gap-1.5`}>
                    <div className={`flex justify-between gap-2 text-sm mt-2 font-semibold text-gray-700`}>
                        <div>
                            <span className="px-2 py-1 bg-lime-200 rounded-lg">{news.source.name}</span>
                        </div>
                        <div>
                            <span className="px-2 py-1 bg-slate-200 rounded-t-md rounded-b-sm">{timeParser(news.publishedAt)}</span>
                        </div>
                    </div>
                    <p className={`font-bold`}>{news.title}</p>
                    <p className={`text-sm font-medium text-gray-700 line-clamp-3`}>{news.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;