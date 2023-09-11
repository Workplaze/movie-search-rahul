import React, { useState, useEffect } from "react";
import { FETCH_ALL_SHOWS } from "./config";

import Header from "./Header/Header";
import Movies from "./Movies/Movies";
import { filter } from "./util/filter";

interface MovieObject {
  id: number;
  name: string;
  image: string;
  rating: string;
  summary: string;
}

const App = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [moviesData, setMoviesData] = useState<MovieObject[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieObject[]>([]);


  const searchChangeHandler = (value: string) => {
    const result = filter(moviesData, value); 
    setFilteredMovies(result);
    setSearchQuery(value);
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
    <React.Fragment>
      <Header searchQuery={searchQuery} onSearchChange={searchChangeHandler} />
      <Movies movies={filteredMovies} />
    </React.Fragment>
  );
};

export default App;
