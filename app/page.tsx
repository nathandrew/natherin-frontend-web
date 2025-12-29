"use client";

import { useState } from "react";

interface LetterTransform {
  x: number;
  y: number;
  rotate: number;
  scale: number;
}

export default function Home() {
  const [transforms, setTransforms] = useState<LetterTransform[] | null>(null);
  const letters = "Natherin".split("");

  const handleClick = () => {
    if (transforms) return;
    setTransforms(
      letters.map(() => ({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 800,
        rotate: Math.random() * 720 - 360,
        scale: Math.random() * 2,
      }))
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden">
      <h1
        className="text-4xl font-semibold cursor-pointer select-none"
        onClick={handleClick}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-1000 ${
              transforms ? "opacity-0" : ""
            }`}
            style={
              transforms
                ? {
                    transform: `translate(${transforms[index].x}px, ${transforms[index].y}px) rotate(${transforms[index].rotate}deg) scale(${transforms[index].scale})`,
                  }
                : undefined
            }
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}
