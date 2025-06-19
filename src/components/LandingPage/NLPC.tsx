/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  delay: number;
  brightness: number;
}

interface NewLandingPageComponentProps {
  image1?: string;
  image2?: string;
}

export const NewLandingPageComponent: React.FC<
  NewLandingPageComponentProps
> = ({ image1, image2 }: any) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [images] = useState(image1);

  useEffect(() => {
    // Generate random stars
    const starCount = 300;
    const newStars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        brightness: 0.2 + Math.random() * 0.8,
      });
    }

    setStars(newStars);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#030008]">
      {/* Faded grid background */}
      <div className="absolute -z-10 inset-0 h-full w-full bg-[radial-gradient(circle,#73737340_1px,transparent_1px)] bg-[size:10px_10px] bg-neutral-800/30 " />

      {images ? (
        <div className="flex">
          <div className="absolute z-10">
            <img
              className="transform scale-x-[-1]"
              src={(image1 && image1) || ""}
              alt="side glow 4"
            />
          </div>
          <div className="ml-[300px]">
            <img className="" src={(image2 && image2) || ""} alt="side glow" />
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Bright stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-[1px] h-[1px] bg-zinc-400 rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            opacity: star.brightness,
            boxShadow: `0 0 ${1 + Math.random() * 2}px rgba(255, 255, 255, ${
              star.brightness * 0.8
            })`,
          }}
        />
      ))}
    </div>
  );
};
