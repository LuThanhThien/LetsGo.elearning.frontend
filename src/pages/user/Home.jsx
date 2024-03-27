import React from "react";
import { useLocation, Route } from "react-router-dom";
import UserNavbar from '../../components/navbar/UserNavbar.jsx';
import UserFooter from '../../components/footer/UserFooter.jsx';

export default function Home() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const mainContent = React.useRef(null);
  const location = useLocation();

  // React.useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   mainContent.current.scrollTop = 0;
  // }, [location]);

  const getRoutes = (userRoutes) => {
    return userRoutes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <div className="bg-indigo-300">
      <UserNavbar />
      <div>
        Home
      </div>
      <UserFooter />
    </div>
  );

};

