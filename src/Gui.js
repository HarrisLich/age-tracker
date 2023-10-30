function Gui(){

    return(
        <div className="absolute top-0 right-0 w-48 h-48  bg-black flex flex-col gap-2 p-2">
            <div className="flex flex-row text-white gap-2">
                Month: 
                <select type="month" className="w-full focus-outline-0 text-black"></select>
            </div>
        </div>
    )
}

export default Gui