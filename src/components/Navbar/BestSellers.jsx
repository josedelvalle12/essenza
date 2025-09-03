import PerfumeCard from "../Carousel/PerfumeCard";

function BestSellers({isOpen}) {
    if (!isOpen) return null;

    const perfumes = [
        { id: 1, name: "Perfume 1", image: "/src/assets/Lattafa/Lattafa_Fakhar.png" },
        { id: 2, name: "Perfume 2", image: "/src/assets/AlHaramain/AlHaramain_UrbanistFemme.png" },
        { id: 3, name: "Perfume 3", image: "/src/assets/Armaf/Armaf_Blue-Homme.png" },
    ];
    return (
        <div 
        className="absolute top-16 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 flex gap-4 z-50"
        onMouseEnter={(e) => e.stopPropagation()}
        >
        {perfumes.map((p) => (
            <PerfumeCard id={p.id} name={p.name} image={p.image}></PerfumeCard>
        ))}
    </div>
    )
}

export default BestSellers;