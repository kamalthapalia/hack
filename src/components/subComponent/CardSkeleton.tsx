const CardSkeleton = () => {
    return (
        <div className="h-[260px] w-full max-w-xl flex justify-between items-center border border-slate-100 shadow-md rounded-md p-4 mx-auto">
            <div className=" w-full animate-pulse flex flex-col items-center space-y-4">
                <div className="rounded-md bg-slate-700 h-20 w-full"></div>
                <div className="flex-1 space-y-6 py-1 w-full">
                    <div className="h-4 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-3 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-3 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-3 bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton
