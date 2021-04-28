import React, {useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import './VideoSidebar.css';
function Videosidebar(props) {
    const [liked, setLiked] = useState(false);
    return (

        <div className="videoSidebar">
            <div className="videoSidebar__button">
                
                {liked ? (
                    <FavoriteIcon onClick={(e) => setLiked(false)} />
                ) : (<FavoriteBorderIcon onClick={(e) => setLiked(true)}/>)
                }
                <p>2110</p>
            </div>
            <div className="videoSidebar__button">
                <ChatIcon />
                <p>251</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon />
                <p>79</p>
            </div>
        </div>
    );
}

export default Videosidebar;