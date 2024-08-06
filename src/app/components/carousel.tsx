import React, { useEffect, useState } from "react";
import { Movie } from "../redux/types";
import Link from "next/link";

interface CarouselProps {
  movies: Movie[];
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div className="carousel w-full h-56 md:h-72 lg:h-96 overflow-hidden relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {movies.map((movie, index) => (
          <Link
            href={`/detail/${movie.imdbID}`}
            key={index}
            className="carousel-item w-full flex-shrink-0 relative h-56 md:h-72 lg:h-96 "
          >
            <img
              src={movie.Poster}
              className="w-full h-full object-cover opacity-70"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 gap-3">
              <p className="text-white text-center text-2xl font-bold">
                {movie.Title}
              </p>
              <p className="text-white font-bold">
                year released : {movie.Year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
