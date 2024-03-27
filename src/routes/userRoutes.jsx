import Home from "../pages/user/Home.jsx";
import Login from "../pages/user/Login.jsx";
import Register from "../pages/user/Register.jsx";


var userRoutes = [
   {
      path: ["/", "/home"],
      title: "Let's Go!",
      icon: "ni ni-tv-2 text-primary",
      component: <Home />,
      page: "/user",
   },
   {
      path: ["/login"],
      title: "Đăng nhập",
      icon: "ni ni-circle-08 text-pink",
      component: <Login />,
      page: "/user",
   },
   {
      path: ["/register"],
      title: "Đăng ký",
      icon: "ni ni-circle-08 text-pink",
      component: <Register />,
      page: "/user",
   },
]

export default userRoutes;