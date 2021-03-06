import React from 'react';
import VideoListItem from './video_list_items';
import '../style/style.css';

const VideoList = (props)=>{
//iterate through the list of videos
  const videoItem = props.videos.map((video)=>{
    return (
      <VideoListItem
        onVideoSelect={props.onSelectedVideo}
        key={video.etag}
        video={video}
      />
    );
  })

  return(
    //return a video list
    <ul className="col-md-8 list-group">
        {videoItem}
        {/* {props.videos.length}*/}
    </ul>
  )
}
export default VideoList;
