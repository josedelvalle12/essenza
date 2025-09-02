import { useState, useRef, useEffect } from "react";

export function useCarousel(cards, gap = 24) {
    const infiniteCards = [...cards, ...cards, ...cards];
    const [currentIndex, setCurrentIndex] = useState(cards.length);
    const scrollRef = useRef(null);

    const scrollToIndex = (index, behavior = "smooth") => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.children[0].offsetWidth + gap;
        scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior,
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

    // Posicionar al centro al cargar
    useEffect(() => {
        scrollToIndex(cards.length, "auto");
    }, [cards.length]);

    // Reajuste invisible cuando llegamos a límites
    useEffect(() => {
        if (!scrollRef.current) return;
        const total = infiniteCards.length;
        const visibleCount = cards.length;

        if (currentIndex >= total - visibleCount) {
        const newIndex = cards.length;
        setTimeout(() => {
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex, "auto");
        }, 300);
        } else if (currentIndex < visibleCount) {
        const newIndex = total - 2 * visibleCount;
        setTimeout(() => {
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex, "auto");
        }, 300);
        }
    }, [currentIndex, cards.length, infiniteCards.length]);

    // Nueva función para obtener estado de cada tarjeta
    const getCardState = (index) => {
        const isActive = index === currentIndex;
        const isAdjacent = index === currentIndex - 1 || index === currentIndex + 1;
        return { isActive, isAdjacent };
    };

    return {
        infiniteCards,
        scrollRef,
        handleNext,
        handlePrev,
        getCardState
    };
}