import "./app.css";
import BackgroundImage from "./components/background-img";
import NavbarTop from "./components/navbar-top";
import Main from "./components/main";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="app">
      <BackgroundImage />
      <NavbarTop />
      <Main />
      <Footer />
    </div>
  );
}
