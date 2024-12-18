// halaman untuk mengatur router
import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/homepages";
import NavBar from "../layout/navbar";
import HomeSlash from "../pages/slash";
import NewStudent from "../pages/newstudent";
import { DetailUser } from "../pages/detailuser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <HomeSlash />,
      },
      {
        path: "/user",
        element: <HomePages />,
      },
      {
        path: "/add",
        element: <NewStudent />,
      },
      {
        path: "/detail/:id",
        element: <DetailUser />,
      },
    ],
  },
]);
