type props = {
    children: React.ReactNode;
    title: string;
}


const DashMenuLayout = ({children, title}: props) => {

    return (
        <div className={` px-8 sm:px-16 relative h-full flex flex-col  max-h-screen  w-full`}>
            <p className={`font-bold sticky top-0 bg-white text-xl py-4`}>{title}</p>
            <div className={` flex-grow p-2`}>{children}</div>
        </div>
    );
};

export default DashMenuLayout;