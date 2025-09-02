import React from "react";
import PerfumeCard from "./PerfumeCard";
import { useCarousel } from "../../Hooks/useCarousel";
import { cards } from "../../data/cards";

function Carrousel() {
    const { infiniteCards, scrollRef, getCardState } = useCarousel(cards);

    return (
        <div className="flex flex-row w-2/3 h-full relative">
            <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-4 scrollbar-hide
            mask-r-only">
                {infiniteCards.map((card, index) => {
                    const { isActive, isAdjacent } = getCardState(index);
                    return (
                    <PerfumeCard id={card.id} 
                    index={index} 
                    name={card.name} 
                    image={card.image}
                    isActive={isActive}
                    isAdjacent={isAdjacent}></PerfumeCard>
                    );
                })}
            </div>
        </div>
    )
}

export default Carrousel;