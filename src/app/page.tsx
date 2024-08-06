"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchPopularMovies,
  searchMovies,
} from "./redux/actions/movieAction";
import { RootState } from "./redux/reducers";
import MovieCard from "./components/movie-card";
import Carousel from "./components/carousel";
import Loading from "./components/loading";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { popularMovies, loading, error, searchResults } = useSelector(
    (state: RootState) => state.movie
  );

  const allMovie = useSelector((state: RootState) => state.allMovie.movies);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchPopularMovies(currentPage));
    dispatch(fetchMovies());
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    setCurrentPage(page);
    document.getElementById("loading-indicator")?.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      document.getElementById("loading-indicator")?.classList.add("hidden");
    }, 1000);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.length < 6) {
      alert("input more than 6 characters");
      return;
    }
    dispatch(searchMovies(searchQuery));
    (document.getElementById("modal_search") as HTMLDialogElement).showModal();
  };

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col">
      <Carousel movies={allMovie} />
      <form onSubmit={handleSearch} className="pt-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="input input-bordered rounded-full"
        />
        <button type="submit" className="btn ml-5 btn-primary">
          Search
        </button>
      </form>

      <div className="pt-8 pb-3 font-semibold">Popular Movies in 2024</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {popularMovies.map((movie) => (
          <MovieCard movies={movie} key={movie.imdbID} />
        ))}
      </div>

      <div className="flex items-center justify-center pt-6">
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button className="join-item btn">Page {currentPage}</button>
          <button
            className="join-item btn"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            »
          </button>
        </div>
      </div>

      <dialog id="modal_search" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg pb-5">Search Results</h3>
          <div className="grid grid-cols-2 gap-5">
            {searchResults && searchResults
              ? searchResults.map((movie) => (
                  <MovieCard movies={movie} key={movie.imdbID} />
                ))
              : "Movie not Found"}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div
        id="loading-indicator"
        className="fixed  inset-0 items-center justify-center bg-gray-800 bg-opacity-50 text-white hidden"
      >
        <Loading />
      </div>
    </div>
  );
};

export default Home;
