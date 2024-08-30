import "./ramp-flag.css";
import Suspense from "react";

export default function RampFlag() {
  return (
    <div className={"flag-container"}>
      <div className={"flag-content"}>
        <span className={"loading"}>
          Loading<span className="dots"></span>
        </span>
        <ul className={"flag-list"}></ul>
      </div>
    </div>
  );
}
