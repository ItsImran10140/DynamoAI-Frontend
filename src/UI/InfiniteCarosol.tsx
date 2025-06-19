import React from "react";

interface CarouselCard {
  id: number;
  color: string;
  title: string;
}

interface InfiniteCarouselProps {
  leftToRightCards?: CarouselCard[];
  rightToLeftCards?: CarouselCard[];
  cardWidth?: string;
  cardHeight?: string;
  animationDuration?: string;
  gap?: string;
  className?: string;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  leftToRightCards,
  rightToLeftCards,
  cardWidth = "w-44",
  cardHeight = "h-28",
  animationDuration = "20s",
  gap = "mx-4",
  className = "",
}) => {
  // Default data if no props provided
  const defaultLeftToRightCards: CarouselCard[] = [
    { id: 1, color: "bg-stone-700/20", title: "Geometric Proofs" },
    { id: 2, color: "bg-stone-700/20", title: "Function Graphing" },
    { id: 3, color: "bg-stone-700/20", title: "Calculus Concepts" },
    { id: 4, color: "bg-stone-700/20", title: "Statistics Viz" },
    { id: 5, color: "bg-stone-700/20", title: "Linear Algebra" },
    { id: 6, color: "bg-stone-700/20", title: "Physics Simulations" },
    { id: 7, color: "bg-stone-700/20", title: "Custom Animations" },
  ];

  const defaultRightToLeftCards: CarouselCard[] = [
    { id: 9, color: "bg-stone-700/20", title: "Function Graphing" },
    { id: 10, color: "bg-stone-700/20", title: "Geometric Proofs" },
    { id: 11, color: "bg-stone-700/20", title: "Calculus Concepts" },
    { id: 12, color: "bg-stone-700/20", title: " Statistics Viz" },
    { id: 13, color: "bg-stone-700/20", title: "Linear Algebra" },
    { id: 14, color: "bg-stone-700/20", title: "Physics Simulations" },
    { id: 15, color: "bg-stone-700/20", title: "Custom Animations" },
  ];

  const leftCards = leftToRightCards || defaultLeftToRightCards;
  const rightCards = rightToLeftCards || defaultRightToLeftCards;

  const renderCards = (cards: CarouselCard[]) => (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${card.color} ${cardWidth} ${cardHeight} flex-shrink-0 ${gap} rounded-lg flex items-center justify-center  font-semibold text-lg shadow-lg border border-neutral-600/25 text-neutral-500`}
        >
          {card.title}
        </div>
      ))}
    </>
  );

  return (
    <div
      className={`w-full flex flex-col  justify-center gap-12 overflow-hidden ${className}`}
    >
      {/* Left to Right Carousel */}
      {leftCards.length > 0 && (
        <div className="relative">
          <div className="flex animate-scroll-left ">
            {renderCards(leftCards)}
            {renderCards(leftCards)}
            {renderCards(leftCards)} {/* Triple for ultra smooth loop */}
          </div>
        </div>
      )}

      {/* Right to Left Carousel */}
      {rightCards.length > 0 && (
        <div className="relative">
          <div className="flex animate-scroll-right">
            {renderCards(rightCards)}
            {renderCards(rightCards)}
            {renderCards(rightCards)} {/* Triple for ultra smooth loop */}
          </div>
        </div>
      )}

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left ${animationDuration} linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right ${animationDuration} linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;
