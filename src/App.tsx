import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundImage from "./components/background-img";
import NavbarTop from "./components/navbar-top";
import Main from "./home/home";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="app">
      <BackgroundImage />
      <NavbarTop />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/settings" element={SettingsPage()} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
