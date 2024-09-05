import "./error.css";
const ErrorImg = require("./assets/magnifying-glass.jpg");

export default function Error() {
  return (
    <div className="error-main">
      <div className="error-content">
        <h1>Sorry</h1>
        <span>We couldn't find that page</span>
      </div>
      <img src={String(ErrorImg)} alt="Error Image" className="error-img" />
    </div>
  );
}
