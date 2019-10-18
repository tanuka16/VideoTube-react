import React from 'react';
import '../style/style.css';
//instead of passdown the props everytime, just replace props attribute with video
const VideoDetail = ({video}) =>{

  if (!video){
    return <h1 className="alert alert-primary">Loading....</h1>
  }

  const videoId = video.id.videoId;
  const url= `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9 col-12 col-sm-6 col-md-8">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="detail col-md-8 card-body">
        <div>
          <h5 className="card-text">{video.snippet.title}</h5>
        </div>
        <div>
          <p className="card-text">{video.snippet.description}</p>
        </div>
      </div>
    </div>
  )
}
export default VideoDetail;
