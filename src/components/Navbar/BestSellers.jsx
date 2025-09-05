import PerfumeCard from "../Carousel/PerfumeCard";

function BestSellers({isOpen}) {
    if (!isOpen) return null;

    const perfumes = [
        { id: 1, name: "Lattafa", image: "/src/assets/Lattafa/Lattafa_Fakhar.png" },
        { id: 2, name: "AlHaramain", image: "/src/assets/AlHaramain/AlHaramain_UrbanistFemme.png" },
        { id: 3, name: "Armaf", image: "/src/assets/Armaf/Armaf_Blue-Homme.png" },
    ];
    return (
        <div 
        className="top-full left-0 w-screen bg-white shadow-lg py-6 z-40"
        onMouseEnter={(e) => e.stopPropagation()}
        >
        <div className="max-w-4/5 mx-auto grid grid-cols-3">
            {perfumes.map((p) => (
                <PerfumeCard id={p.id} 
                name={p.name} 
                image={p.image} 
                isActive={true} 
                className="shadow-lg shadow-gray-400" 
                classNameImg="object-cover transition-transform duration-300 ease-in-out hover:scale-110"></PerfumeCard>
            ))}
        </div>
    </div>
    )
}

export default BestSellers;