import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Logo from "./components/Service/Logo/Logo";
import Flyer from "./components/Service/Flyer/Flyer";
import Poster from "./components/Service/Poster/Poster";
import Instagram from "./components/Service/Instagram/Instagram";
import Video from "./components/Service/Video/Video";
import More from "./components/Service/More/More";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Logo" element={<Logo />}></Route>
        <Route path="/Flyer" element={<Flyer />}></Route>
        <Route path="/Poster" element={<Poster />}></Route>
        <Route path="/Instagram" element={<Instagram />}></Route>
        <Route path="/Video" element={<Video />}></Route>
        <Route path="/More" element={<More />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
