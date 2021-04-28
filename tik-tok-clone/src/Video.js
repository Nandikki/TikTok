import React, {useRef, useState} from 'react';
import VideoFooter from './VideoFooter';
import './Video.css'
import VideoSidebar from './VideoSidebar'

function Video() {
    
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
            src="https://v77.tiktokcdn.com/37e6db03a1e00d5dcb557a4801331022/6089e039/video/tos/useast2a/tos-useast2a-ve-0068c004/09027a84b36349b19838ebef4b441d59/?a=1233&br=1740&bt=870&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210428162237010189072032460EA5B4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Bsd3lpZjV4NDMzNzczM0ApPDY7NTkzPDxoNzlmZzg1OWdlYWhsYV4wX2hgLS1kMTZzcy8tMmBfM2JfXjIzLzFeNDM6Yw%3D%3D&vl=&vr="></video>
            {<VideoFooter channel="bellapoarch" description="It's my time bro! eheh #LetsGo!" song="Lil Nas X | call me when you want call me when you need" />}
            {<VideoSidebar />}
        </div>
    );
}

export default Video;