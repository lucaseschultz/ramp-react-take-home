import { useEffect } from "react";

const fetchFlag = async () => {
  try {
    const response = await fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/707261"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const HTML = await response.text();
    const FLAG_DOM = new DOMParser().parseFromString(HTML, "text/html");
    const FLAG_ARRAY = FLAG_DOM.querySelector("body")!.textContent!.split("");
    const FLAG_OL = document.getElementsByClassName("flag-list");
    FLAG_ARRAY.forEach((letter) => {
      const LETTER_LI = document.createElement('li');
      LETTER_LI.textContent = letter;
      FLAG_OL[0].appendChild(LETTER_LI);
    });
  } catch (error) {
    // TypeError: Failed to fetch
    console.log(error);
  }
};

export default function LoadedFlag() {
  useEffect(async() => {
    fetchFlag(await fetchFlagUrl());
  }, []);
  return <ol className={"flag-list"}></ol>;
}


// setTimeout(() => {}, 500);