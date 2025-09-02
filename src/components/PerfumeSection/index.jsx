import React from "react";
import PerfumeScene from './PerfumeScene';
import SpaIcon from "@mui/icons-material/Spa";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function PerfumeSection({
    // background = "#171616", 
    name = "LATTAFA", 
    description = "Discover the power of defining your unique aroma and embracing the essence of you. Learn how to express your individuality through scent and experience the true essence of yourself. your personal scent and make it apart of your identity.", 
    color = "#4F3528", 
    perfume = "/Lattafa.glb", 
    img1 = "/src/assets/Lattafa/Lattaffa_AsadBourbon.png",
    img2 = "/src/assets/Lattafa/Lattafa_Khamrah.png", 
    img3= "/src/assets/Lattafa/Lattafa_BadeeAlOud.png"}) {
    
    return (
        <div className={`h-screen w-full mx-auto flex flex-col px-40 py-32`}
        style={{background: `radial-gradient(at 45% 75%, black 0%, #171616 50%, ${color} 90%)`}}>
            {/* Flecha */}
            <div className="flex items-center place-content-center w-fit">
                <div className="w-12 h-12 rounded-full bg-[#C8A25F] flex items-center justify-center shadow-md">
                    <SpaIcon className="w-6 h-6" />
                </div>
                <TrendingFlatIcon className="text-[#C8A25F] m-0 p-0 -ml-1" fontSize="large"></TrendingFlatIcon>
            </div>

            <div className="w-full">
                <h1 className="w-full text-9xl flex flex-initial text-white font-akshar mt-4">{name}</h1>
            </div>

            <div className="flex flex-row mt-10" >
                <div className="w-lg h-xs overflow-hidden rounded-b-[50%]">
                    <img src={img1} 
                    alt="Asad Bourbon" 
                    className="w-full h-full object-cover"></img>
                </div>

                <div className="w-3/4">
                    <div className="space-y-6 place-content-end mx-40">
                        <p className="text-2xl font-poppins font-light leading-relaxed text-white w-5/6 text-start">
                        {description}
                        </p>

                        <button className={`flex font-poppins font-normal items-center gap-2 px-10 py-2 my-7 text-white rounded-md hover:bg-white transition-all`}
                        style={{ backgroundColor: color }}
                        onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.color = color;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = color;
                        e.currentTarget.style.color = "white";
                    }}>
                        About Us →
                        </button>
                    </div>


                    
                    {/* Imágenes */}
                    <div className="flex items-center justify-between w-full gap-6">

                        <div className="flex justify-center items-center w-[500px] h-[500px]">
                            <PerfumeScene modelPath={perfume} color={color} scale={2.2} />
                        </div>

                        {/* Izquierda - con borde arco */}
                        <div className="w-xs h-lg overflow-hidden rounded-t-full mx-48 mt-64">
                            <img
                                src={img2}
                                alt="Perfume 1"
                                className="w-full h-full object-cover"
                            />
                        </div>


                        {/* Derecha - con borde en esquina inferior derecha */}
                        <div className="w-xs h-72 overflow-hidden rounded-br-[100px] mb-32">
                            <img
                                src={img3}
                                alt="Perfume 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PerfumeSection;