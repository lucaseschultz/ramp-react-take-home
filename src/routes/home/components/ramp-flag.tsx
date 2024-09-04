import "./ramp-flag.css";
// import { Suspense } from "react";

export default function RampFlag() {
  return (
    <div className={"flag-container"}>
      <div className={"flag-content"}>
        <LoadingFlag />
        {/* <Suspense fallback={<LoadingFlag />}>
          <LoadedFlag />
        </Suspense> */}
      </div>
    </div>
  );
}

function LoadingFlag() {
  return (
    <span className={"loading"}>
      Loading<span className="dots"></span>
    </span>
  );
}

function LoadedFlag() {
  return (
    <span className={"loading"}>
      Loading<span className="dots"></span>
    </span>
  );
}
