import React from "react";
import Image from "next/image";
import { Movie } from "../redux/types";
import Link from "next/link";

interface MovieCardProps {
  movies: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movies }) => {
  return (
    <>
      <Link href={`detail/${movies.imdbID}`}>
        <div className="flex gap-3 flex-col bg-secondary bg-opacity-50 p-2 h-full rounded-xl">
          <div className="flex flex-col w-full">
            <div style={{ position: "relative", height: "300px" }}>
              <Image
                src={
                  !movies.Poster || movies.Poster == "N/A"
                    ? "/not-found.png"
                    : movies.Poster
                }
                className="rounded-t-xl"
                fill
                alt="poster"
                sizes="(min-width: 100px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="text-md text-center font-bold">{movies.Title}</div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
