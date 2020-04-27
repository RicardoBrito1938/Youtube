import {combineReducers} from 'redux';
import search from './search';
import runVideo from './run-video';

const rootReducer = combineReducers({
    search,
    runVideo,
});

export default rootReducer;
