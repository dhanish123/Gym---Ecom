import React from "react";
import video from "../../assets/b3.mp4";
import "./BgVideo.scss";

const BgVideo = () => {
  return (
    <div>
      <div className="bgContainer">
        <div className="overlay">
          <video src={video} autoPlay loop muted />
          {/* <div className="container"></div> */}
        </div>
      </div>
    </div>
  );
};

export default BgVideo;
