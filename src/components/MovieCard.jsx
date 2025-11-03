import React from "react";
import Watchlist from "./Watchlist";

function MovieCard({
  movieObj,
  handleAddtoWatchlist,
  name,
  poster_path,
  handleRemovefromWatchlist,
  watchlist,
}) {
  function doesContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="relative flex flex-col h-[40vh] w-[220px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cusror-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemovefromWatchlist(movieObj);
          }}
          className="m-4 flex justify-center absolute right-0 rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddtoWatchlist(movieObj);
          }}
          className="m-4 flex justify-center absolute right-0 rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
