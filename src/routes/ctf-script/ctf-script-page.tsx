import "./ctf-script-page.css";
import CTFScript from "./components/ctf-script";

export default function CTFScriptPage() {
  return (
    <div className="main">
      <div className="content">
        <div className="code-container">
          <CTFScript />
        </div>
      </div>
    </div>
  );
}
