import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onSelectVideo}) => {

    return(
        <div onClick={() => onSelectVideo(video)} className="media">
            <img src={video.snippet.thumbnails.default.url} alt="thumbnails" className="mr-3"/>

            <div className="media-body">
                <small className="mt-0">{video.snippet.title}</small>
            </div>
        </div>
    );
}

export default VideoItem;