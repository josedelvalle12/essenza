import React, { useRef, useState, useEffect} from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function ExploreSection({color= '#6D4D39'}) {
    const cards = [
    { id: 1, image: "/src/assets/Lattafa/Lattaffa_Asad.png", name: "Lattafa Asad"},
    { id: 2, image: "/src/assets/Lattafa/Lattafa_Fakhar.png", name: "Lattafa Fakhar" },
    { id: 3, image: "/src/assets/Lattafa/Lattaffa_AsadZanzibar.png", name: "Lattafa Asad Zanzibar"},
    { id: 4, image: "/src/assets/Lattafa/Lattafa_Khamrah2.png", name: "Lattafa Khamrah Qahwa"},
  ];

  // Duplicamos lista para el infinito
  const infiniteCards = [...cards, ...cards, ...cards];

  const [currentIndex, setCurrentIndex] = useState(cards.length); // Empieza en medio
  const scrollRef = useRef(null);

  const scrollToIndex = (index, behavior = "smooth") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0].offsetWidth + 24; // gap
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: behavior,
    });
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // 🔥 Posicionar bien al cargar la página SIN animación
  useEffect(() => {
    scrollToIndex(cards.length, "auto");
  }, []);

  // 🔥 Reinicio de índice invisible (sin animación)
  useEffect(() => {
    if (!scrollRef.current) return;
    const total = infiniteCards.length;
    const visibleCount = cards.length;

    if (currentIndex >= total - visibleCount) {
      const newIndex = cards.length;
      setTimeout(() => {
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex, "auto");
      }, 300); // pequeño delay para que termine la animación antes del salto
    } else if (currentIndex < visibleCount) {
      const newIndex = total - 2 * visibleCount;
      setTimeout(() => {
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex, "auto");
      }, 300);
    }
  }, [currentIndex]);


  return (
    <div className="flex flex-row h-[48rem] w-full px-40 py-32"
    style={{ backgroundColor: color }}>
      {/* Texto y botones */}
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

      {/* Carrusel */}
      <div className="flex flex-row w-2/3 h-full relative">
        <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-4 scrollbar-hide
        mask-r-only">
            {infiniteCards.map((card, index) => {
                const isActive = index === currentIndex;
                const isAdjacent = index === currentIndex - 1 || index === currentIndex + 1;
                return (
                <div
                    key={`${card.id}-${index}`}
                    className={`snap-center flex-shrink-0 w-lg h-full rounded-3xl ${card.color}
                    transition-all duration-500
                    ${isActive ? "opacity-100 scale-100" : isAdjacent ? "opacity-70 scale-95" : "opacity-40 scale-90"}`}>

                    <img src={card.image} alt={card.name} className="w-full h-10/12 rounded-t-3xl object-cover"></img>
                    <div className="w-full bg-white rounded-b-3xl">
                      <p className="h-14 w-96 place-content-center font-almarai font-semibold text-start ml-16">{card.name}</p>
                    </div>
                    
                    
                </div>
                );
            })}
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;


