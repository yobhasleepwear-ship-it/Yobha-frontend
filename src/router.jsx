import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./comman/app-layout/app-layout";

// Lazy load pages
const Home = lazy(() => import("./pages/coming-soon/comingSoon"));
const ContactUs = lazy(() => import("./pages/contact-us/ContactUs"));

const Router = () => {
  const routes = [
    { path: "/", element: <Navigate to="/home" replace /> },
    { path: "/home", element: <Home /> },
    { path: "/contact-us", element: <ContactUs /> },
    // Add more pages here
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={<AppLayout>{element}</AppLayout>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
