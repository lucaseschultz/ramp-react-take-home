import { useEffect } from "react";

const fetchFlag = async () => {
  const FLAG_LINK =
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6d6f72";
  // grabbing flag from flag link and inserting into page
  try {
    const response = await fetch(FLAG_LINK);
    if (!response.ok) {
      throw new Error("Flag URL response was not ok");
    }
    const HTML = await response.text();
    const FLAG_DOM = new DOMParser().parseFromString(HTML, "text/html");
    const FLAG_ARRAY = FLAG_DOM.querySelector("body")!.textContent!.split("");
    const FLAG_OL = document.getElementsByClassName("flag-list");
    FLAG_ARRAY.forEach((letter) => {
      const LETTER_LI = document.createElement("li");
      LETTER_LI.textContent = letter;
      FLAG_OL[0].appendChild(LETTER_LI);
      setTimeout(() => {}, 500);
    });
  } catch (error: any) {
    // TypeError: Failed to fetch flag URL
    throw new Error(error);
  }
};

let didInit = false;
export default function LoadedFlag() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      fetchFlag();
    }
  }, []);
  return <ol className={"flag-list"}></ol>;
}
