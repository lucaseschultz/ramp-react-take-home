import "./navbar-top.css";
import { Link } from "react-router-dom";

export default function NavbarTop({
  otherPageName,
  otherPageLink,
}: {
  otherPageName: string;
  otherPageLink: string;
}) {
  return (
    <nav className={`navbar-container`}>
      <div className={"navbar-content"}>
        <a
          href={"https://github.com/lucaseschultz/ramp-react-take-home"}
          target={"_blank"}
        >
          This Repository
        </a>
        <span className="navbar-separator">/</span>
        <Link to={otherPageLink}>
          {otherPageName}
        </Link>
      </div>
    </nav>
  );
}
