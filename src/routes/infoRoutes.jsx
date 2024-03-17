import About from "@/pages/info/About"
import Price from "@/pages/info/Price"

var infoRoutes = [
   {
      path: ["/price"],
      name: "Home",
      icon: "ni ni-tv-2 text-primary",
      component: <Price />,
      page: "/info",
   },
   {
      path: ["/about"],
      name: "Home",
      icon: "ni ni-tv-2 text-primary",
      component: <About />,
      page: "/info",
   },
]

export default infoRoutes;