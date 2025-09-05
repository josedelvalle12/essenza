function BenefitCard({title, text, icono}) {
    return (
        <div className="h-full w-1/4 flex flex-col justify-around relative z-10">
            <div className="w-full h-full py-20 flex flex-col justify-around">
                <div className="rounded-full bg-[#f0e8f27a] w-12 h-12 flex flex-row justify-center pt-2 text-white">{icono}</div>
                <p className="font-poppins font-semibold text-3xl text-start text-white">{title}</p>
            </div>
            <div className="h-0.5 w-full bg-white"></div>
            <p className="font-poppins font-normal text-xl text-start text-white py-20 px-2">{text}</p>
        </div>
        
    )
}

export default BenefitCard;