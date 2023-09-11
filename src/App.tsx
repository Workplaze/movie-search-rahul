import React, { useState } from "react";

import Header from "./Header/Header";
import Movies from "./Movies/Movies";

const App = () => {

  const [searchQuery, setSearchQuery] = useState("");
  

  const searchChangeHandler = (value: string) => {
    console.log('Running...');
    setSearchQuery(value);
  };

  return (
    <React.Fragment>
      <Header searchQuery={searchQuery} onSearchChange={searchChangeHandler} />
      <Movies />
    </React.Fragment>
  );
};

export default App;
