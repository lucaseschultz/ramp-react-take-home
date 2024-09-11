import "./app.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundImage from "./components/background-img";
import NavbarTop from "./components/navbar-top";
import Footer from "./components/footer";
import Home from "./routes/home/home";
import CTFScriptPage from "./routes/ctf-script/ctf-script-page";
import Error from "./routes/error/error";

export default function App() {
  const [otherPageName, setOtherPageName] = useState("CTF Script");
  let [otherPageLink, setOtherPageLink] = useState("./ctf-script-page");
  return (
    <div className="app">
      <Router>
        <BackgroundImage />
        <NavbarTop
          otherPageName={otherPageName}
          otherPageLink={otherPageLink}
        />
        <div className={'main'}>
          <Routes>
            <Route path="/" element={<Home />} errorElement={<Error />} />
            <Route
              path="/ctf-script-page"
              element={<CTFScriptPage />}
              errorElement={<Error />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
