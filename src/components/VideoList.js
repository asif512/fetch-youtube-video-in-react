import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos, onSelectVideo}) => {


    const renderVideo = videos.map((video, index) => {
        return (
            <VideoItem 
                key={index}
                onSelectVideo={onSelectVideo}
                video={video}
            /> 
        ); 
    });
    

    return(
        <div className="" >
            {renderVideo}
        </div>
    );
}

export default VideoList;