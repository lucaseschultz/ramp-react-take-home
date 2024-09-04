import "./app.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundImage from "./components/background-img";
import NavbarTop from "./components/navbar-top";
import Footer from "./components/footer";
import Main from "./home/home";
import CTFScript from "./ctf-script/ctf-script";

export default function App() {
  const [otherPageName, setOtherPageName] = useState("CTF Script");
  let [otherPageLink, setOtherPageLink] = useState("./settings");
  return (
    <div className="app">
      <BackgroundImage />
      <NavbarTop otherPageName={otherPageName} otherPageLink={otherPageLink} />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settings" element={<CTFScript />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
