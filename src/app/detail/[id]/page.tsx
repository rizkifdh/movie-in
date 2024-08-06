"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "../../redux/reducers";
import { fetchMovieDetail } from "../../redux/actions/movieAction";
import { IoIosArrowBack } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import Loading from "@/app/components/loading";

export default function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const dispatch = useDispatch();
  const { movieDetail, loading, error } = useSelector(
    (state: RootState) => state.movie
  );
  const router = useRouter();

  const genres = movieDetail?.Genre?.split(", ");

  useEffect(() => {
    if (params.id) {
      dispatch(fetchMovieDetail(params.id));
    }
  }, [params.id, dispatch]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  if (movieDetail)
    return (
      <>
        <button className="btn btn-secondary" onClick={() => router.back()}>
          <IoIosArrowBack />
          Back
        </button>
        <div className="flex flex-col items-center gap-5 pt-5">
          <img
            src={
              !movieDetail.Poster || movieDetail.Poster == "N/A"
                ? "/not-found.png"
                : movieDetail.Poster
            }
            className="object-cover"
          />
          <div className="flex flex-col items-center gap-7">
            <div className="text-2xl font-bold text-center">
              {movieDetail.Title}
            </div>
            <div className="flex gap-5">
              {genres?.map((genre: string) => (
                <span
                  key={genre}
                  className="text-sm text-primary border-primary border-2 p-3 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="flex flex-col w-full">
              <p className="inline-flex items-center gap-2">
                <CiCalendarDate />
                Released: {movieDetail.Released}
              </p>
              <p className="inline-flex items-center gap-2">
                <MdOutlineAccessTime />
                Duration: {movieDetail.Runtime}
              </p>
              <p className="inline-flex items-center gap-2">
                <RiMovie2Fill />
                Rated: {movieDetail.Rated}
              </p>
            </div>
            <p className="text-justify">
              {movieDetail.Plot === "N/A" ? "Plot is Empty" : movieDetail.Plot}
            </p>

            <div className="flex flex-col w-full">
              <p>Director: {movieDetail.Director}</p>
              <p>Writer: {movieDetail.Writer}</p>
              <p>Actors: {movieDetail.Actors}, etc</p>
            </div>

            <div className="flex flex-col w-full">
              <p className="inline-flex items-center gap-2">
                <FaStar />
                IMDB Rating: {movieDetail.imdbRating}
              </p>
              <p className="inline-flex items-center gap-2">
                <FaThumbsUp />
                IMDB Votes: {movieDetail.imdbVotes}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full"></div>
        </div>
      </>
    );
}
