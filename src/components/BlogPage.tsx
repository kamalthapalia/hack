import { TfiWrite } from "react-icons/tfi";
import { AiOutlineClockCircle } from "react-icons/ai";
import BlogCardGroup from "./subComponent/UserBlog/BlogCardGroup.tsx";

const BlogPage = () => {
    return (
        <div className="container mx-auto my-10">
            <img
                className="w-full h-[750px] object-cover"
                src="https://images.pexels.com/photos/1509607/pexels-photo-1509607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Blog cover"
            />
            <div className="flex flex-col gap-1.5 mt-4">
                <div className="flex  gap-2 text-sm font-semibold text-gray-700">
                    <div className={`flex gap-2 items-center`}>
                        <TfiWrite />
                        <p>Raja Hero</p>
                    </div>
                    <div className={`flex gap-2 items-center`}>
                        <AiOutlineClockCircle />
                        <p>5 mins ago</p>
                    </div>
                </div>
                <h1 className="font-bold text-lg mt-2">New Strain of Rice Blast Fungus Threatens Global Food
                    Security</h1>
                <p className="font-medium text-gray-700 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perferendis perspiciatis sequi
                    voluptate. Consequuntur, distinctio nihil. Asperiores blanditiis cupiditate dolore, eveniet
                    excepturi harum id impedit, iste maxime, non quis repellat repellendus sed sequi veniam. Commodi
                    debitis ea eligendi labore magnam nulla optio recusandae reiciendis.
                    <br />
                    <br />
                    A adipisci aperiam architecto aspernatur assumenda atque autem culpa cumque debitis deleniti dolores
                    eius eligendi enim et explicabo id illo impedit ipsum laudantium maiores maxime mollitia nemo nobis
                    non odit optio pariatur praesentium quo repellendus repudiandae rerum sapiente sint temporibus totam
                    velit voluptas, voluptatibus. Culpa dolore dolores enim iure nulla sed, similique tenetur veritatis
                    voluptate. Aliquid commodi cumque delectus dolorum eos explicabo impedit ipsam, labore maiores
                    maxime minus modi natus necessitatibus, quidem, sapiente sit voluptas voluptatum.
                    <br />
                    <br />
                    Ad adipisci consequatur deleniti eaque enim facilis laudantium, libero, non quasi quos ratione,
                    similique voluptas. A architecto consectetur culpa molestias natus non optio quis quo reiciendis,
                    repellat rerum sunt vel voluptates.
                </p>
                <p className="font-medium text-gray-700 mt-2">
                    Further research is essential to understand the potential impact of this new strain on global
                    agriculture. Governments and agricultural organizations must collaborate to develop effective
                    strategies to combat this threat. Early detection and rapid response will be crucial in mitigating
                    the damage caused by this fungus.
                    <br />
                    <br />
                    Farmers are advised to stay informed about the latest developments and to implement recommended
                    preventive measures. The international community must also address this issue with urgency to ensure
                    food security for millions of people worldwide.
                </p>
            </div>
            <div>
                <BlogCardGroup />
            </div>
        </div>
    );
};

export default BlogPage;
