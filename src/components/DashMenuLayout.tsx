type props = {
    children: React.ReactNode;
    title: string;
}


const DashMenuLayout = ({children, title}: props) => {

    return (
        <div className={`px-24 relative h-full flex flex-col  max-h-screen overflow-y-scroll  w-full`}>
            <p className={`font-bold sticky top-0 bg-white px-2 text-xl py-4`}>{title}</p>
            <div className={` flex-grow px-2`}>{children}</div>
        </div>
    );
};

export default DashMenuLayout;