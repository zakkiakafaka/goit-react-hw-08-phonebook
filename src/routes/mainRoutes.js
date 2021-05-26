import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage" /*webpackChankName:'HomePage'*/)),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Contacts",
    path: "/contacts",
    exact: false,
    component: lazy(() => import("../pages/ContactsPage" /*webpackChankName:'ContactsPage'*/)),
    isPrivate: true,
    isRestricted: false,
  },

  {
    name: "Registration",
    path: "/registration",
    exact: true,
    component: lazy(() => import("../pages/AuthPage" /*webpackChankName:'AuthPage'*/)),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/AuthPage" /*webpackChankName:'AuthPage'*/)),
    isPrivate: false,
    isRestricted: true,
  }
];

export default mainRoutes;
