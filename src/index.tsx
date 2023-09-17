import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";
import User from "./User/User";
import UserDetails from "./pages/UserDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://evolving-fowl-65.hasura.app/v1/graphql",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "5acGklXa4Ag73Oaik5K85Kzj2gA6NhXCQB2YTxBJO8PBd1g0EjMjIcDP6EzUsUIF",
    },
  }),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  { path: "", element: <Home /> },
  { path: "/user", element: <User /> },
  { path: "/user/:id", element: <UserDetails /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
