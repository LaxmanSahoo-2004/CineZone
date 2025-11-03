import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({ handleAddtoWatchlist, handleRemovefromWatchlist , watchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=54336fd5945745951846a937967922e2&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-4">
      <div className="text-2xl m-5 font-bold text-center">Trending movies</div>

      <div className="flex flex-row flex-wrap justify-around gap-6">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              movieObj={movieObj}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemovefromWatchlist={handleRemovefromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=54336fd5945745951846a937967922e2&language=en-US&page=1
