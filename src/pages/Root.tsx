import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { filter } from "../util/filter";
import { FETCH_ALL_SHOWS } from "../config";
import { MovieObject } from "../Common/types";
import { ThemeContext } from "../context/Theme";
import { darkTheme, lightTheme } from "../util/themeStyles";

import Header from "../Header/Header";
import Filter from "../context/FilterContext";

const Root = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMode, setCurrentMode] = useState("dark");
  const [moviesData, setMoviesData] = useState<MovieObject[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieObject[]>([]);

  const searchChangeHandler = (value: string): void => {
    const result = filter(moviesData, value);
    setFilteredMovies(result);
    setSearchQuery(value);
  };

  const toggleMode = (): void => {
    if (currentMode === "light") {
      setCurrentMode("dark");
    } else {
      setCurrentMode("light");
    }
  };

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const res = await fetch(FETCH_ALL_SHOWS);
        if (res.ok) {
          const data = await res.json();
          setMoviesData(data);
          setFilteredMovies(data);
        }
      } catch (err) {
        console.log("Unable to Fetch movies ", err);
      }
    };

    getMoviesData();
  }, []);

  return (
    <ThemeContext.Provider
      value={{ mode: currentMode, modeHandler: toggleMode }}
    >
      <ToastContainer autoClose={2000} position={"bottom-center"} />
      <Header searchQuery={searchQuery} onSearchChange={searchChangeHandler} />
      <Filter>
        <main style={currentMode === "light" ? lightTheme : darkTheme}>
          <Outlet context={[filteredMovies]} />
        </main>
      </Filter>
    </ThemeContext.Provider>
  );
};

export default Root;
