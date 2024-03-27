import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import allRoutes from './routes/allRoutes'; // Import routes configuration
import { set } from 'react-hook-form';


function getRoutes(routes) {
  return routes.map((route, index) => (
    // Map over each path in the route's path array
    route.path.map((path, pathIndex) => (
      <Route
        key={`${index}-${pathIndex}`} 
        path={route.page + path} 
        element={route.component}
      />
    ))
  ))
};



const App = () => {
  const defaultTitle = "Let's Go!"; // Default title

  const findRoute = () => {
    const pathName = window.location.pathname.replace(/\/+$/, '').trim(); 
    return allRoutes.find(route => {
      // console.log("Trimmed path: " + pathName);
      return route.path.some(path => {
        const combinedPath = `${route.page}${path}`.replace(/\/+$/, '').trim();
        // console.log("Combined path: " + combinedPath);
        return pathName === combinedPath;
      });
    });
  }

  useEffect(() => {
    // Set document title based on the current route
    const currentRoute = findRoute();
    if (currentRoute) {
      document.title = (currentRoute.title !== "" || currentRoute.title !== null) ?
          currentRoute.title + " | " + defaultTitle : defaultTitle; // Set document title
    } else {
      document.title = defaultTitle; // Set default title
    }
  }, [window.location.pathname]); // Run the effect whenever the path changes

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Map over the routes configuration and render Route components */}
          {getRoutes(allRoutes)}
          <Route path="*" element={<Navigate to="/user" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
