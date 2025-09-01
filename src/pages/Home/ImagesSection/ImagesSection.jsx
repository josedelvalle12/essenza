import React from "react";

function ImagesSection() {
    return (
        <section className="w-full h-screen flex">
            <div className="w-1/2 overflow-hidden">
                <img src="/src/assets/Organ.png" alt="Perfume Organ" className="h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"></img>
            </div>
            <div className="w-1/2 overflow-hidden">
                <img src="/src/assets/anwan.png" alt="Perfume Organ" className="h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"></img>

            </div>
        </section>
    )
}

export default ImagesSection;