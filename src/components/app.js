import "../styles/main.scss";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import CommonLayout from "../layout/CommonLayout";
import AboutPage from "../pages/About";
import SmoothScroller from "./utils/SmoothScroller";


const App = () => {
  return (
    <Suspense fallback={null}>
   
      <CommonLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </CommonLayout>
    </Suspense>
  );
};

export default App;
