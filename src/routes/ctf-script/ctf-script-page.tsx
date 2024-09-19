import "./ctf-script-page.css";
import CTFScript from "./components/ctf-script";
import { useEffect } from "react";

interface CTFScriptPageProps {
  otherPageName?: string;
  setOtherPageName?: (value: ((prevState: string) => string) | string) => void;
  otherPageLink?: string;
  setOtherPageLink?: (value: ((prevState: string) => string) | string) => void;
}

export default function CTFScriptPage({
  otherPageName,
  setOtherPageName,
  otherPageLink,
  setOtherPageLink,
}: CTFScriptPageProps) {
  useEffect(() => {
    if (otherPageName != "CTF Flag") {
      setOtherPageName!("CTF Flag");
    }
    if (otherPageLink != "./home") {
      setOtherPageLink!("./home");
    }
  }, []);
  return (
    <div className="ctf-script-page-main">
      <div className="ctf-script-page-content">
        <div className="script-container">
          <CTFScript />
        </div>
      </div>
    </div>
  );
}
