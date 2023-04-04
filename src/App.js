import React, { useEffect, useState } from "react";
import "./App.css";
import VideoComponent from "./pages/VideoComponent";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosDocs = await getDocs(videosCollection);
    const videosList = videosDocs.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app-videos">
        {video.map((item) => {
          return (
            <VideoComponent
              likes={item.likes}
              comments={item.comments}
              shares={item.shares}
              user={item.user}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
