import "./navbar-top.css";

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
        <a href={otherPageLink} target={"_blank"}>
          {otherPageName}
        </a>
      </div>
    </nav>
  );
}
