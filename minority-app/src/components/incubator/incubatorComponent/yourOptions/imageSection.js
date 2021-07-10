import { useState } from "react";

function ImageSection({ classes, image, text }) {
  const [scaleImage, setScaleImage] = useState(false);
  return (
    <div className={classes.wrapImageSec}>
      <img
        src={image}
        alt="imageSec"
        className={scaleImage ? classes.scale : ""}
      />
      <div
        className={classes.wrapBtnText}
        onMouseEnter={() => setScaleImage(true)}
        onMouseLeave={() => setScaleImage(false)}
      >
        <button className={classes.btnText}>{text}</button>
      </div>
    </div>
  );
}
export default ImageSection;
