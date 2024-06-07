import CommentCard from "./CommentCard.tsx";

const CommentGroup = () => {
    return (
        <div>
            <p className={`font-bold mb-5`}>Comments</p>
            <div className={`flex flex-col gap-8`}>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>

            </div>
        </div>
    );
};

export default CommentGroup;