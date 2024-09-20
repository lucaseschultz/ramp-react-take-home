import "./ramp-flag.css";
import { Suspense } from "react";
import LoadingFlag from "./ramp-flag-components/loading-flag";
import LoadedFlag from "./ramp-flag-components/loaded-flag";

export default function RampFlag() {
  return (
    <div className={"flag-container"}>
      <div className={"flag-content"}>
        <Suspense fallback={<LoadingFlag />}>
          <LoadedFlag />
        </Suspense>
      </div>
    </div>
  );
}
