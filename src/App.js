import * as React from "react";
import "./App.css";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/page/Home";
import About from "./components/page/About";

import Logo from "./components/page/Service/Logo/Logo";
import Flyer from "./components/page/Service/Flyer/Flyer";
import Poster from "./components/page/Service/Poster/Poster";
import Instagram from "./components/page/Service/Instagram/Instagram";
import Video from "./components/page/Service/Video/Video";
import More from "./components/page/Service/More/More";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Logo" component={Logo} />
          <Route path="/Flyer" component={Flyer} />
          <Route path="/Poster" component={Poster} />
          <Route path="/Instagram" component={Instagram} />
          <Route path="/Video" component={Video} />
          <Route path="/More" component={More} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Routes>
    </div>
  );
}
