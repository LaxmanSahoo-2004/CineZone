import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [watchlist, setwatchlist] = useState([]);

  let handleAddtoWatchlist = (movieObject) => {
    let newWatchlist = [...watchlist, movieObject];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist))
    setwatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemovefromWatchlist = (movieObject) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObject.id;
    });
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist))
    setwatchlist(filteredWatchlist);
  };

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setwatchlist(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemovefromWatchlist={handleRemovefromWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={<Watchlist watchlist={watchlist} handleRemovefromWatchlist={handleRemovefromWatchlist}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
