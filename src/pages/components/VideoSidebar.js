import React, {useState} from 'react';
import './videoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar() {

    const [liked, setLiked] = useState(false);

    function handdleLike(){
        setLiked(!liked);
    }
  return (
    <div className='videoSidebar'>
        <div 
            className='sidebar-options'
            onClick={handdleLike}
        >
            {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            <p>{liked ? 300+1 : 300}</p>
        </div>
        <div className='sidebar-options'>
            <ChatIcon/>
            <p>72 </p>
        </div>
        <div className='sidebar-options'>
            <ShareIcon/>
            <p>24 </p>
        </div>
    </div>
  )
}

export default VideoSidebar