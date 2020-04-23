import youtubeSearch from 'youtube-api-v3-search';
import YTapi from '../../api';

const API_KEY = YTapi;

export const searchVideoInit = () => {
    return {
        type: 'SEARCH_VIDEO_INIT',
        loading: true,
        erro: false,
    };
};

export const searchVideoSuccess = (videos) => {
    return {
        type: 'SEARCH_VIDEO_SUCCESS',
        videos,
        loading: false,
    };
};

export const searchVideoError = () => {
    return {
        type: 'SEARCH_VIDEO_ERROR',
        loading: false,
        error: true,
    };
};

export const searchVideo = (therm) => {
    return (dispatch) => {
        dispatch(searchVideoInit());
        youtubeSearch(API_KEY, {q: therm})
            .then((data) => dispatch(searchVideoSuccess(data.items)))
            .catch(() => dispatch(searchVideoError()));
    };
};
