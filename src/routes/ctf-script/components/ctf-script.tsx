import { useEffect } from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.min.css";

const markMarkdown = async () => {
  document.getElementById("script")!.innerHTML = await marked.parse(markdown);
  hljs.highlightAll();
};

export default function CTFScript() {
  useEffect(() => {
    markMarkdown();
  });
  return <div id="script"></div>;
}

const markdown = `<pre><code>
const fetchFlagUrl = async () => {
  const response = await fetch("https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge")
  const HTML = await response.text();
  const FLAG_DOM = new DOMParser().parseFromString(HTML, "text/html");
  const CODE_CONTAINERS = FLAG_DOM.querySelectorAll("code");
  let link = ""

  // searching NodeList for DOM's containing link chars
  // DOM pattern for each link char:
  // &lt;code data-class="23*">
  //     &lt;div data-tag="*93">
  //         &lt;span data-id="*21*">
  //             &lt;i class="char" value="VALID_CHARACTER"></i>
  //         </span>
  //     </div>
  // &lt;/code>
  CODE_CONTAINERS.forEach((CURR_CONTAINER) =>
  {
    if (CURR_CONTAINER.getAttribute("data-class")!.match(/^23/)) {
      const CODE_CHILDREN = CURR_CONTAINER.children;
      for (let i=0; i<CODE_CHILDREN.length; i++) {
        const CURR_CODE_CHILD = CODE_CHILDREN[i];
        if (CURR_CODE_CHILD.nodeName === 'DIV' && CURR_CODE_CHILD.getAttribute("data-tag")!.match(/93$/)) {
          const DIV_CHILDREN = CURR_CODE_CHILD.children;
          for (let f=0; f<DIV_CHILDREN.length; f++) {
            const CURR_DIV_CHILD = DIV_CHILDREN[f];
            if (CURR_DIV_CHILD.nodeName === "SPAN" && CURR_DIV_CHILD.getAttribute("data-id")!.match(/21/)) {
              const SPAN_CHILDREN = CURR_DIV_CHILD.children;
              for (let e=0; e<SPAN_CHILDREN.length; e++) {
                const CURR_SPAN_CHILD = SPAN_CHILDREN[e];
                if (CURR_SPAN_CHILD.nodeName === "I" && CURR_SPAN_CHILD.className.match(/^(.*&bsol;&bsol;s)?char(&bsol;&bsol;s.*)?$/)) {
                  // adding valid link char to create/find CTF link
                  link += CURR_SPAN_CHILD.getAttribute("value");
                }
              }
            }
          }
        }
      }
    }
  });
  console.log(link);
  return link;
  //  as of 9/20/24:
  //  returns https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/707261
  //  link contains the work "praying"
}
</code></pre>`;
