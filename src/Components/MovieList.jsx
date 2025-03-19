import React, { useEffect, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import MovieCard from "./MovieCard";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <div>
      {movieList.map((item, index) => (
        <MovieCard movie={item} />
      ))}
    </div>
  );
}
export default MovieList;
