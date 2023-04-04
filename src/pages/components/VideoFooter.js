import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({user, description, music}) {
  return (
    <div className="footer">
      <div className="text-footer">
        <h3>@{user}</h3>
        <p>{description}</p>
        <div className="music-footer">
          <MusicNoteIcon className="iconmusic-footer" />
          <div className="textmusic-footer">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="record-footer"
        alt="Imagem de vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
