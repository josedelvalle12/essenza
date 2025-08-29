import React from "react";
import SpaIcon from "@mui/icons-material/Spa";

const items = [
    "Indulge in Exquisite Elegance",
    "The Art of Refined Aroma",
    "Essence of Extravagance",
    "Beyond Mere Fragrance",
    "Exclusivity Captured",
];

function TextFeatures() {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-amber-700 to-orange-300 py-8">
        <div className="flex whitespace-nowrap animate-marquee">
            {/* Primer bloque */}
            {items.map((text, index) => (
            <div
                key={index}
                className="flex items-center mx-10"
            >
                <p className="font-roboto(Poppins) text-white font-semibold text-2xl">
                {text}
                </p>
                <SpaIcon className="mx-4 text-white" />
            </div>
            ))}
            {/* Segundo bloque (duplicado para loop infinito) */}
            {items.map((text, index) => (
            <div
                key={`dup-${index}`}
                className="flex items-center mx-10"
            >
                <p className="font-roboto(Poppins) text-white font-semibold text-2xl">
                {text}
                </p>
                <SpaIcon className="mx-4 text-white" />
            </div>
            ))}
        </div>
        </div>
    );
}

export default TextFeatures;

