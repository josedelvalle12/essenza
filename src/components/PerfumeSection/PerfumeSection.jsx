import React from "react";
import SpaIcon from "@mui/icons-material/Spa";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function PerfumeSection() {
    return (
        <div className="h-screen w-full mx-auto flex flex-col bg-[radial-gradient(at_45%_75%,#171616_0%,#171616_50%,#4F3528_90%)] px-40 pt-16">
            {/* Flecha */}
            <div className="flex items-center place-content-center w-fit">
                <div className="w-12 h-12 rounded-full bg-[#C8A25F] flex items-center justify-center shadow-md">
                    <SpaIcon className="w-6 h-6" />
                </div>
                <TrendingFlatIcon className="text-[#C8A25F] m-0 p-0 -ml-1" fontSize="large"></TrendingFlatIcon>
            </div>

            <div className="w-11/12">
                <h1 className="w-90 text-9xl flex flex-initial text-white font-roboto(Akshar) mt-2">LATTAFA</h1>
            </div>

            <div className="flex flex-row mt-10" >
                <div className="w-lg h-xs overflow-hidden rounded-b-[50%]">
                    <img src="/src/assets/Lattafa/Lattaffa_AsadBourbon.png" 
                    alt="Asad Bourbon" 
                    className="w-full h-full object-cover"></img>
                </div>

                <div className="w-3/4">
                    <div className="space-y-6 place-content-end mx-40">
                        <p className="text-2xl leading-relaxed text-white w-5/6 text-start">
                        Discover the power of defining your unique aroma and embracing the essence
                        of you. Learn how to express your individuality through scent and
                        experience the true essence of yourself. your personal scent and make it a
                        part of your identity.
                        </p>

                        <button className="flex items-center gap-2 px-10 py-2 my-7 bg-[#A68B7D] text-white rounded-md hover:text-[#A68B7D] hover:bg-white transition-all">
                        About Us →
                        </button>
                    </div>

                    {/* Imágenes */}
                    <div className="flex place-content-end gap-6 ">
                        {/* Izquierda - con borde arco */}
                        <div className="w-xs h-lg overflow-hidden rounded-t-full mx-48 mt-64">
                        <img
                            src="/src/assets/Lattafa/Lattafa_Khamrah.png"
                            alt="Perfume 1"
                            className="w-full h-full object-cover"
                        />
                        </div>

                        {/* Derecha - con borde en esquina inferior derecha */}
                        <div className="w-xs h-72 overflow-hidden rounded-br-[100px] mb-32">
                        <img
                            src="/src/assets/Lattafa/Lattafa_BadeeAlOud.png"
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