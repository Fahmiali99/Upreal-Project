import * as React from "react";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Blog from "./components/Blog/Blog";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
