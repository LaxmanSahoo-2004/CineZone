import React, { useState } from "react";
import genreId from "../utility/genre";

const Watchlist = ({ watchlist, handleRemovefromWatchlist }) => {
  const [search, setSearch] = useState("");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {/* <div className="flex justify-center flex-wrap m-4 gap-4">
        <div className="flex justify-center items-center bg-blue-400 p-2 h-[3rem] w-[9rem] rounded-xl text-white font-bold">
          Action
        </div>
        <div className="flex justify-center items-center bg-gray-200 p-2 h-[3rem] w-[9rem] rounded-xl text-white font-bold">
          Genre
        </div>
        <div className="flex justify-center items-center bg-blue-400 p-2 h-[3rem] w-[9rem] rounded-xl text-white font-bold">
          Action
        </div>
      </div> */}

      <div className=" flex justify-center mt-6">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-800 m-8">
        <table className="w-full text-gray-700 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center py-4">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        className="h-[6rem] w-[8rem]"
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreId[movieObj.genre_ids[0]]}</td>

                    <td
                      onClick={() => {
                        handleRemovefromWatchlist(movieObj)
                      }}
                      className="text-red-800"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
