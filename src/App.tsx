import "./app.css";
import BackgroundImage from "./components/background-img";
import NavbarTop from "./components/navbar-top";
import RampFlag from "./components/ramp-flag";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="page">
      <BackgroundImage />
      <NavbarTop />
      <RampFlag />
      <Footer />
    </div>
  );
}
