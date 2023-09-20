import { createBrowserRouter, RouterProvider } from "react-router-dom";

import User from "./User/User";
import Root from "./pages/Root";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import HighDefinition from "./pages/HighDefinition";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/user", element: <User /> },
      { path: "/4kVideos", element: <HighDefinition /> },
      { path: "/hindiMovies", element: <HighDefinition /> },
      { path: "/user/:id", element: <UserDetails /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
