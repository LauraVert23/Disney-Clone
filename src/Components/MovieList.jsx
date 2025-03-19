import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import GlobalAPI from "../Services/GlobalAPI";
import MovieCard from "./MovieCard";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => sliderLeft(elementRef.current)}
        className="text-[50px] text-white p-2 z-10 cursor-pointer
        hidden md:block absolute mt-[150px]"
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth
    pt-4 px-3 pb-4"
      >
        {movieList.map((item, index) => (
          <MovieCard movie={item} />
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => sliderRight(elementRef.current)}
        className="text-[50px] text-white hidden md:block p-2 z-10 
    top-0 absolute right-0 mt-[150px] cursor-pointer"
      />
    </div>
  );
}
export default MovieList;
