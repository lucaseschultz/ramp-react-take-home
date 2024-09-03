import "./background-img.css";
const BGIMG = require("../assets/background-wood.jpg");

export default function BackgroundImg() {
  return (
    <div className={`background-img-container`}>
      <img
        src={String(BGIMG)}
        alt="Background Image"
        placeholder="blur"
        className="background-img"
      />
    </div>
  );
}
