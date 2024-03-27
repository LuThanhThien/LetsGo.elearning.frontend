import Grade10 from "@/pages/courses/Grade10"
import Grade11 from "@/pages/courses/Grade11"
import Grade12 from "@/pages/courses/Grade12"
import THPTQG from "@/pages/courses/THPTQG"

var infoRoutes = [
   {
      path: ["/grade-10"],
      title: "Lớp 10",
      icon: "ni ni-tv-2 text-primary",
      component: <Grade10 />,
      page: "/course",
   },
   {
      path: ["/grade-11"],
      title: "Lớp 11",
      icon: "ni ni-tv-2 text-primary",
      component: <Grade11 />,
      page: "/course",
   },
   {
      path: ["/grade-12"],
      title: "Lớp 12",
      icon: "ni ni-tv-2 text-primary",
      component: <Grade12 />,
      page: "/course",
   },
   {
      path: ["/thptqg"],
      title: "Ôn thi THPTQG",
      icon: "ni ni-tv-2 text-primary",
      component: <THPTQG />,
      page: "/course",
   },
]

export default infoRoutes;