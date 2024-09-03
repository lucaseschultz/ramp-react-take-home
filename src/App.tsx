import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundImage from "./components/background-img";
import NavbarTop from "./components/navbar-top";
import Footer from "./components/footer";
import Main from "./home/home";
import CTFScript from "./ctf-script/ctf-script";

export default function App() {
  return (
    <div className="app">
      <BackgroundImage />
      <NavbarTop />
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
