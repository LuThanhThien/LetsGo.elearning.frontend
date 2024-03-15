import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes'; // Import routes configuration
import UserNavbar from './components/navbars/UserNavbar.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserNavbar />
        <Routes>
          {/* Map over the routes configuration and render Route components */}
          {routes.map((route, index) => (
            // Map over each path in the route's path array
            route.path.map((path, pathIndex) => (
              <Route
                key={`${index}-${pathIndex}`} 
                path={route.page + path} 
                element={route.component}
              />
            ))
          ))}
          <Route path="*" element={<Navigate to="/user" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
