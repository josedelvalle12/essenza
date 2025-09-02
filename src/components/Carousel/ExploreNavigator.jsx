import React from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useCarousel } from "../../Hooks/useCarousel";
import { cards } from "../../data/cards";

function ExploreNavigator(color) {
    const { handleNext, handlePrev } = useCarousel(cards);
    return (
        <div className="flex flex-col w-1/3 h-full">
            <img src="/src/assets/logoLattafa2.png" alt="Logo Lattafa" className="size-20 mb-5"/>
            <h2 className="text-black font-normal text-6xl text-start mb-3">Explore our collection</h2>
            <p className="text-black font-light text-3xl text-start mb-24">What you wear when you want to be unforgettable.</p>

            <div className="flex flex-row place-content-between w-2/12">
                <button onClick={handlePrev} className="bg-black rounded-full size-14">
                    <KeyboardArrowLeftIcon style={{ color: color }} />
                </button>
                <button onClick={handleNext} className="bg-black rounded-full size-14">
                    <KeyboardArrowRightIcon style={{ color: color }} />
                </button>
            </div>
        </div>
    )
}

export default ExploreNavigator;