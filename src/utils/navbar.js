import React from "react";
import useId from "../hooks/useId";
import Signin from "..//components/Register";
import Favourite from "..//components/Favourite";
import MyProfile from "..//components/MyProfile";
import AddNewHouse from "..//components/AddHouse";
import { HomePage } from "..//components/HomePage";
import { Contact } from "../components/Contact";
import { Blog } from "../components/Blog";
import { About } from "../components/About";
import { HouseItem } from "../components/HouseItem";
// const HomePage = React.lazy(() => import("..//components/HomePage"));
// const Contact = React.lazy(() => import("..//components/Contact"));
// const HoumeItem = React.lazy(() => import("..//components/HouseItem"));

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />{" "}
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Contact />
      </React.Suspense>
    ),
    title: "Ixtiyoriy nom",
    path: "/contact",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Blog />
      </React.Suspense>
    ),
    title: "Blog",
    path: "/blog",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <About />
      </React.Suspense>
    ),
    title: "About",
    path: "/about",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HouseItem />
      </React.Suspense>
    ),
    title: "Single House",
    path: "/houseitem/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <MyProfile />,
    title: "My Profile",
    path: "/myprofile",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/myprofile/newhouse",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/myprofile/edithouse/:id",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <Favourite />,
    title: "Favourite",
    path: "/favourite",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <Signin />,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Signin />,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
