"use client"
import { useState } from "react";
import Image from "next/image";
import type { Slide } from "../data/career";

interface CareerSliderProps {
  career: Slide[];
}

export default function CareerSlider({ career }: CareerSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => setCurrentSlide(prev => (prev - 1 + career.length) % career.length);
  const handleNext = () => setCurrentSlide(prev => (prev + 1) % career.length);

  const slide = career[currentSlide];

  return (
    <div className="p-4 h-full overflow-auto bg-[#1a0033] text-[#D8BFD8]">
      <h2 className="text-xl text-[#87CEFA] font-bold mb-4">Mon Parcours</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3">
          <Image
            src={slide.image}
            alt={slide.title}
            width={600}
            height={400}
            className="object-cover border-2 border-[#8A2BE2] w-full h-48 md:h-80"
          />
          <p className="mt-2 font-bold text-center text-[#87CEFA]">
            C:\Parcours\{slide.title}.exe
          </p>
          <p className="mt-2 text-sm">{slide.description}</p>
        </div>

        <div className="md:w-1/3 flex flex-col justify-center items-center gap-4">
          <p className="font-bold">Navigation :</p>
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              className="px-3 py-1 bg-[#8A2BE2] text-white border-2 border-[#D8BFD8] hover:bg-[#6A1CB2] font-bold"
            >
              ← Précédent
            </button>
            <button
              onClick={handleNext}
              className="px-3 py-1 bg-[#8A2BE2] text-white border-2 border-[#D8BFD8] hover:bg-[#6A1CB2] font-bold"
            >
              Suivant →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
