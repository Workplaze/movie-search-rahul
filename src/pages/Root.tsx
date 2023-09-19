import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { filter } from "../util/filter";
import { FETCH_ALL_SHOWS } from "../config";
import { MovieObject } from "../Common/types";
import { ThemeContext } from "../context/Theme";

import Header from "../Header/Header";

const Root = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMode, setCurrentMode] = useState("dark");
  const [moviesData, setMoviesData] = useState<MovieObject[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieObject[]>([]);

  const searchChangeHandler = (value: string) => {
    const result = filter(moviesData, value);
    setFilteredMovies(result);
    setSearchQuery(value);
  };

  const toggleMode = () => {
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
        console.log(err);
      }
    };

    getMoviesData();
  }, []);

  return (
    <ThemeContext.Provider
      value={{ mode: currentMode, modeHandler: toggleMode }}
    >
      <Header searchQuery={searchQuery} onSearchChange={searchChangeHandler} />
      <Outlet context={[filteredMovies]} />
    </ThemeContext.Provider>
  );
};

export default Root;