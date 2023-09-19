import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "react-responsive-modal/styles.css";

import App from "./App";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_URI,
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": `${process.env.REACT_APP_KEY}`,
    },
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
