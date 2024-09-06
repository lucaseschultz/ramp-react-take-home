import "./ctf-script-page.css";
import CTFScript from "./components/ctf-script";

export default function CTFScriptPage() {
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
