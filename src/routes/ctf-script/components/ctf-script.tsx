import { useEffect } from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.min.css";

const markMarkdown = async () => {
  const MARKDOWN_RESPONSE = await fetch('../../../../assets/fetch-flag-url-script');
  const MARKDOWN_HTML = await MARKDOWN_RESPONSE.text();
  document.getElementById("script")!.innerHTML = await marked.parse(`<pre><code>${MARKDOWN_HTML.replace('<', '&lt;').replace('\\s', '&bsol;s')}</code></pre>`);
  hljs.highlightAll();
};


let didInit = false;
export default function CTFScript() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      markMarkdown();
    }
  });
  return <div id="script"></div>;
}
