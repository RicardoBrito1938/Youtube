import React from 'react';
import {useSelector} from 'react-redux';
import {Advertisement, Embed} from 'semantic-ui-react';

export default function VideoPlayer() {
    const video = useSelector((state) => state.runVideo.video);

    return (
        <div className="video-player">
            {!video.id && (
                <Advertisement
                    style={{height: '430px'}}
                    unit="top-banner"
                    test="Choose a video to reproduce"
                />
            )}
            {video.id && (
                <div>
                    <Embed
                        id={video.id.videoId}
                        source="youtube"
                        placeholder=""
                    />
                    <p className="video-tittle">{video.snippet.tittle}</p>
                    <p className="video-description">
                        {video.snippet.description}
                    </p>
                </div>
            )}
        </div>
    );
}
