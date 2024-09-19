import "./home.css";
import RampFlag from "./components/ramp-flag";
import { useEffect } from "react";

interface HomeProps {
  otherPageName?: string;
  setOtherPageName?: (value: ((prevState: string) => string) | string) => void;
  otherPageLink?: string;
  setOtherPageLink?: (value: ((prevState: string) => string) | string) => void;
}

export default function Home({
  otherPageName,
  setOtherPageName,
  otherPageLink,
  setOtherPageLink,
}: HomeProps) {
  useEffect(() => {
    if (otherPageName != "CTF Script") {
      setOtherPageName!("CTF Script");
    }
    if (otherPageLink != "./ctf-script-page") {
      setOtherPageLink!("./ctf-script-page");
    }
  }, []);
  return (
    <div className="home-main">
      <RampFlag />
    </div>
  );
}
