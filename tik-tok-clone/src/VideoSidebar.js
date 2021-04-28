import React, {useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import './VideoSidebar.css';
function Videosidebar({likes, comments, shares}) {
    const [liked, setLiked] = useState(false);
    return (

        <div className="videoSidebar">
            <div className="videoSidebar__button">
                
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ) : (<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)}/>)
                }
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <ChatIcon fontSize="large" />
                <p>{comments}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    );
}

export default Videosidebar;