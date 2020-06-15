import React from 'react';

const VideoDetails = (props) => {
    if(!props.video){
        return <p>Loading...</p>;
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return(
        <div>
            <div className="">
                <iframe className="w-100" title="Video Player" src={videoSrc} style={{height: '400px'}}></iframe>
            </div>
            <strong>{props.video.snippet.channelTitle}</strong>
            <br />
            <small>{props.video.snippet.title}</small>
        </div>
    );
}

export default VideoDetails;