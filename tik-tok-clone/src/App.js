import React, { useState, useEffect } from "react";
import './App.css';
import Video from './Video';
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => setVideos(snapshot.docs.map(doc => doc.data())))
   }, [videos])
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({url, channel, description, song, likes, comments, shares}) => (
          <Video url={url}
          song ={song}
          likes = {likes}
          comments = {comments}
          shares = {shares}
          channel = {channel}
          description = {description}/>
          )
        )}
        </div>
    </div>
    
  );
}

export default App;
