import "./background-img.css";

export default function BackgroundImg() {
  return (
    <div className={`background-img-container`}>
      <img
        src="../../public/background-wood.jpg"
        alt="Background Image"
        placeholder="blur"
        className="background-img"
        // priority
      />
    </div>
  );
}
