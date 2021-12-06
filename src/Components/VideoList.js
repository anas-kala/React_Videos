import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} key={video.id.videoId} onSelectVideo={onSelectVideo} />
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;