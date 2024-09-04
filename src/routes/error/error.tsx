import "./error.css";
const ErrorImg = require("./assets/magnifying-glass.jpg");

export default function Error() {
  return (
    <div className="main">
      <div className="content">
        <h1>Sorry</h1>
        <span>We couldn't find that page Test</span>
      </div>
      <img
        src={"./assets/magnifying-glass.jpg"}
        alt="Error Image"
        className="error-img"
      />
    </div>
  );
}
