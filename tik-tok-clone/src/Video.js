import React, {useRef} from 'react';
import './Video.css'

function Video() {
    
    const videoRef = useRef(null);
    const onVideoPress = () => {
        videoRef.current.play();
    }
    return (
        <div className="video">
            <video 
            classname="video__player" 
            loop
            ref={videoRef}
            onClick={onVideoPress}
            src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"></video>
            {/* <VideoFooter /> */}
            {/* <VideoSidebar /> */}
        </div>
    );
}

export default Video;