import React, {useRef, useState} from 'react';
import VideoFooter from './VideoFooter';
import './Video.css'
import VideoSidebar from './VideoSidebar'

function Video({
        url,
        channel,
        description,
        song,
        likes,
        comments,
        shares,
    }) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video 
            classname="video__player" 
            loop
            ref={videoRef}
            onClick={onVideoPress}
            src={url}></video>
            {<VideoFooter channel={channel} description={description} song={song} />}
            {<VideoSidebar likes={likes} comments={comments} shares={shares} />}
        </div>
    );
}

export default Video;