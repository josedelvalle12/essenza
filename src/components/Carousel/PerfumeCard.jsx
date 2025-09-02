import React from "react";

function PerfumeCard({id, index, name, image, isActive, isAdjacent}) {
    return ( 
        <div
            key={`${id}-${index}`}
            className={`snap-center flex-shrink-0 w-lg h-full rounded-3xl bg-white
            transition-all duration-500
            ${isActive ? "opacity-100 scale-100" : isAdjacent ? "opacity-70 scale-95" : "opacity-40 scale-90"}`}>

            <img src={image} alt={name} className="w-full h-10/12 rounded-t-3xl object-cover"></img>
            <div className="w-full bg-white rounded-b-3xl">
                <p className="h-14 w-96 place-content-center font-almarai font-semibold text-start ml-16">{name}</p>
            </div>

        </div>
    )
}

export default PerfumeCard;