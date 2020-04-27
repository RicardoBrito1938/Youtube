import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {List, Image, Dimmer, Loader} from 'semantic-ui-react';
import {runVideo} from '../store/actions/run-video';

// import { Container } from './styles';

export default function VideoList() {
    const videos = useSelector((state) => state.search.videos);
    const loading = useSelector((state) => state.search.loading);
    const dispatch = useDispatch();

    return (
        <div className="video-list">
            {loading && (
                <Dimmer active inverted>
                    <Loader size="medium">Loading...</Loader>
                </Dimmer>
            )}
            {videos.map((video) => (
                <>
                    <List animated verticalAlign="middle" key={video.etag}>
                        <List.Item onClick={() => dispatch(runVideo(video))}>
                            <Image src={video.snippet.thumbnails.default.url} />
                        </List.Item>
                        <List.Content>
                            <List.Header>{video.snippet.title}</List.Header>
                        </List.Content>
                    </List>
                </>
            ))}
        </div>
    );
}
