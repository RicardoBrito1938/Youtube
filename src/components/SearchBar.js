import React from 'react';
import {Input, Segment} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import {searchVideo} from '../store/actions/search-video';

export default function SearchBar() {
    const dispatch = useDispatch();

    const searchTherm = (e) => {
        if (e.keyCode === 13) {
            const therm = e.target.value;
            console.log(therm);
            dispatch(searchVideo(therm));
        }
    };

    return (
        <div className="search-bar">
            <Segment stacked>
                <Input
                    icon="search"
                    onKeyDown={searchTherm}
                    size="large"
                    placeholder="Search..."
                />
            </Segment>
        </div>
    );
}
