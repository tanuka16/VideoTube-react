import React from 'react';

//replace argument 'props' with destructure method('video'), which allow us to call only 1 object that we want
//in this case we'll get the video atribute from video_list, not the entire list of videos
const VideoListItem = ({video, onVideoSelect}) =>{
  const imageUrl=video.snippet.thumbnails.default.url;
  return (
    <li onClick={()=>onVideoSelect(video)} className="list-group-item" >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-left" src={imageUrl}/>
        </div>
        <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>

        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
