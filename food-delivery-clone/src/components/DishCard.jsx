const DishCard = (props) => {

    
    const { name, category, description, price, isVeg} = props.itemInfo;

    return <>
        <article className="rounded-xl bg-orange-400 p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mt-8 cursor-pointer">
            <div className="flex items-start sm:gap-8">
                <div
                className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-slate-50"
                aria-hidden="true"
                >
                <div className="flex items-center gap-1">
                    <span className="h-8 w-0.5 rounded-full bg-slate-50"></span>
                    <span className="h-6 w-0.5 rounded-full bg-slate-50"></span>
                    <span className="h-4 w-0.5 rounded-full bg-slate-50"></span>
                    <span className="h-6 w-0.5 rounded-full bg-slate-50"></span>
                    <span className="h-8 w-0.5 rounded-full bg-slate-50"></span>
                </div>
                </div>

                <div>
                <strong
                    className="rounded border border-lime-500 bg-lime-500 px-3 py-1.5 text-[10px] font-medium text-white"
                >
                    {isVeg===1? "Veg": "Non-Veg"}
                </strong>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                    <a href="#" className="hover:underline text-slate-50"> {name} </a>
                </h3>

                <p className="mt-1 text-sm text-slate-50">
                    {description}
                </p>

                <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1 text-slate-50">
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>

                    <p className="text-xs font-medium text-slate-50">Price: {price/100}</p>
                    </div>

                    <span className="hidden sm:block text-slate-50" aria-hidden="true">&middot;</span>

                    <p className="mt-2 text-xs font-medium text-slate-50 sm:mt-0">
                    {category} 
                    {/* <a href="#" className="underline text-slate-50">Barry</a>,
                    <a href="#" className="underline text-slate-50">Sandra</a> and
                    <a href="#" className="underline text-slate-50">August</a>   */}
                    </p>
                </div>
                </div>
            </div>
        </article>
    </>
}


export default DishCard