import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import User from "./User/User";
import UserDetails from "./pages/UserDetails";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/user", element: <User /> },
      { path: "/user/:id", element: <UserDetails /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
