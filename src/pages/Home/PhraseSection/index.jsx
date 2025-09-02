import React from "react";

function PhraseSection() {
    return (
        <div className="w-full h-[48rem] px-40 py-32 relative bg-black">
            <div className="absolute inset-0">
                <video src="/src/assets/indoor-portrait-of-nice-looking-amazing-caucasian-2025-08-29-12-50-09-utc.mov"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-40"></video>
            </div>
            <div className="relative z-10 flex items-center justify-center h-full text-center">
                <h1 className="font-almarai text-white font-normal text-6xl">
                    Perfumes that reflect your essence and elevate every moment.
                </h1>
            </div>
        </div>
    )
}


export default PhraseSection;