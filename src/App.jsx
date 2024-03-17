import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import allRoutes from './routes/allRoutes'; // Import routes configuration


export function getRoutes(routes) {
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
