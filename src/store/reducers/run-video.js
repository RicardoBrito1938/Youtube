const INITIAL_STATE = {
    video: {},
};

export default function runVideo(state = INITIAL_STATE, action) {
    if (action.type === 'RUN_VIDEO') {
        return {video: action.video};
    } else return state;
}
