/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import NotFounded from "./pages/NotFounded";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='blog' element={<Blog />} />
      <Route path='*' element={<NotFounded />} />
    </Routes>
  );
};
export default App;
