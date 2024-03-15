import Home from "./pages/user/Home.jsx";
import Login from "./pages/user/Login.jsx";

var routes = [
 {
    path: ["/login"],
    name: "Login",
    icon: "ni ni-circle-08 text-pink",
    component: <Login />,
    page: "/user",
  },
  {
    path: ["/", "/home"],
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: <Home />,
    page: "/user",
  },
];

export default routes;
