import Home from "../pages/user/Home.jsx";
import Login from "../pages/user/Login.jsx";
import Register from "../pages/user/Register.jsx";


var userRoutes = [
   {
      path: ["/", "/home"],
      name: "Trang chủ",
      icon: "ni ni-tv-2 text-primary",
      component: <Home />,
      page: "/user",
   },
   {
      path: ["/login"],
      name: "Đăng nhập",
      icon: "ni ni-circle-08 text-pink",
      component: <Login />,
      page: "/user",
   },
   {
      path: ["/register"],
      name: "Đăng ký",
      icon: "ni ni-circle-08 text-pink",
      component: <Register />,
      page: "/user",
   },
]

export default userRoutes;