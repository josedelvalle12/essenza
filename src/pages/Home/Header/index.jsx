import React from "react";

function Header() {
    return (
        <div className="relative h-[90vh] w-full bg-gray-950 bg-cover bg-center">

            <div className="absolute inset-0">
                <img
                src="/src/assets/UsoPerfume2.png"
                alt="Perfume Background"
                className="w-full h-full object-cover opacity-20"></img>
            </div>
            <div className="absolute inset-0">
                <video
                src="/humo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-20 mix-blend-screen"></video>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full text-center">
                <h1 className="font-almarai text-white font-normal text-6xl">
                    Fragrance for people who want <span className="font-light italic">more style</span> and <span className="font-light italic">mood reflection.</span>
                </h1>
            </div>
        </div>
        
    )
}

export default Header;