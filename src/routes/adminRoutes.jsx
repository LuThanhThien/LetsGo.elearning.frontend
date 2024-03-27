import Dashboard from "@/pages/admin/Dashboard.jsx";


var adminRoutes = [
   {
      path: ["/dashboard"],
      title: "Lớp 10",
      icon: "ni ni-tv-2 text-primary",
      component: <Dashboard />,
      page: "/admin",
   },
]

export default adminRoutes;