import { useEffect } from "react";

const fetchFlagUrl = async () => {
  try {
    const response = await fetch(
      "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"
    );
    if (!response.ok) {
      throw new Error("Challenge URL response was not ok");
    }
    const HTML = await response.text();
    const FLAG_DOM = new DOMParser().parseFromString(HTML, "text/html");
    const CODE_CONTAINERS = FLAG_DOM.querySelectorAll("code");
    var flagLink = "";

    // searching NodeList for DOM's containing link chars
    // DOM pattern for each link char:
    // <code data-class="23*">
    //     <div data-tag="*93">
    //         <span data-id="*21*">
    //             <i class="char" value="VALID_CHARACTER"></i>
    //         </span>
    //     </div>
    // </code>
    CODE_CONTAINERS.forEach((CURR_CONTAINER) => {
      if (CURR_CONTAINER.getAttribute("data-class")!.match(/^23/)) {
        const CODE_CHILDREN = CURR_CONTAINER.children;
        for (let i = 0; i < CODE_CHILDREN.length; i++) {
          const CURR_CODE_CHILD = CODE_CHILDREN[i];
          if (
            CURR_CODE_CHILD.nodeName === "DIV" &&
            CURR_CODE_CHILD.getAttribute("data-tag")!.match(/93$/)
          ) {
            const DIV_CHILDREN = CURR_CODE_CHILD.children;
            for (let f = 0; f < DIV_CHILDREN.length; f++) {
              const CURR_DIV_CHILD = DIV_CHILDREN[f];
              if (
                CURR_DIV_CHILD.nodeName === "SPAN" &&
                CURR_DIV_CHILD.getAttribute("data-id")!.match(/21/)
              ) {
                const SPAN_CHILDREN = CURR_DIV_CHILD.children;
                for (let e = 0; e < SPAN_CHILDREN.length; e++) {
                  const CURR_SPAN_CHILD = SPAN_CHILDREN[e];
                  if (
                    CURR_SPAN_CHILD.nodeName === "I" &&
                    CURR_SPAN_CHILD.className.match(/^(.*\s)?char(\s.*)?$/)
                  ) {
                    // adding valid link char to create/find CTF link
                    flagLink += CURR_SPAN_CHILD.getAttribute("value");
                  }
                }
              }
            }
          }
        }
      }
    });
    console.log(flagLink);
    return flagLink;
  } catch (error: any) {
    // TypeError: Failed to fetch Challenge URL
    throw new Error(error);
  }
};

const fetchFlag = async () => {
  const FLAG_LINK = await fetchFlagUrl();
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
    });
  } catch (error: any) {
    // TypeError: Failed to fetch flag URL
    throw new Error(error);
  }
};

export default function LoadedFlag() {
  useEffect(() => {
    fetchFlag();
  }, []);
  return <ol className={"flag-list"}></ol>;
}

