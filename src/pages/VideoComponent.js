import React, { useRef, useState } from "react";
import "./videocomponent.css";
import VideoFooter from "./components/VideoFooter";
import VideoSidebar from "./components/VideoSidebar";

function VideoComponent({likes, comments, shares, user, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="player"
        src= {url}
        ref={videoRef}
        onClick={handdleStart}
        loop
      ></video>

      {/* SIDE BAR */}
      <VideoSidebar
        likes = {likes}
        comments = {comments}
        shares = {shares}
      />
      {/* FOOTER */}
      <VideoFooter
        user = {user} 
        description = {description}
        music = {music}
      />
    </div>
  );
}

export default VideoComponent;


// <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@amanda_marquex/video/7194481999220870405" data-video-id="7194481999220870405" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@amanda_marquex" href="https://www.tiktok.com/@amanda_marquex?refer=embed">@amanda_marquex</a> Respondendo a @zenzins2 <a title="xurrasco_021" target="_blank" href="https://www.tiktok.com/tag/xurrasco_021?refer=embed">#xurrasco_021</a> <a title="xurrasco" target="_blank" href="https://www.tiktok.com/tag/xurrasco?refer=embed">#xurrasco</a> <a title="fuanfuanfuan" target="_blank" href="https://www.tiktok.com/tag/fuanfuanfuan?refer=embed">#fuanfuanfuan</a> <a title="fy" target="_blank" href="https://www.tiktok.com/tag/fy?refer=embed">#fy</a> <a target="_blank" title="♬ The Less I Know The Better - Tame Impala" href="https://www.tiktok.com/music/The-Less-I-Know-The-Better-6758326933815035905?refer=embed">♬ The Less I Know The Better - Tame Impala</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>