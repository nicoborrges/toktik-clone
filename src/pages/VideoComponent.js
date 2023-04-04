import React, { useRef, useState } from "react";
import "./videocomponent.css";
import VideoFooter from "./components/VideoFooter";
import VideoSidebar from "./components/VideoSidebar";

function VideoComponent() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="player"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        ref={videoRef}
        onClick={handdleStart}
        loop
      ></video>

      {/* SIDE BAR */}
      <VideoSidebar/>
      {/* FOOTER */}
      <VideoFooter/>
    </div>
  );
}

export default VideoComponent;
