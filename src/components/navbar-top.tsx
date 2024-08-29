import "./navbar-top.css";

export default function NavbarTop() {
  return (
    <nav className={`navbar-container`}>
      <div className={"navbar-content"}>
        <a
          href={"https://github.com/lucaseschultz/ramp-react-take-home"}
          target={"_blank"}
        >
          This VCS
        </a>
        <span className="navbar-separator">/</span>
        <a href={"./"} target={"_blank"}>
          Flag Script
        </a>
      </div>
    </nav>
  );
}
