import "./background-img.css";
import BGImg from "../images/background-wood.jpg";

export default function BackgroundImg() {
  return (
    <div className={`background-img-container`}>
      <img
        src={BGImg}
        alt="Background Image"
        placeholder="blur"
        className="background-img"
      />
    </div>
  );
}
