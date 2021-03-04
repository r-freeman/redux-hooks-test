import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from '../types';

const initialState = {data: [], isFetchingPosts: false};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_BEGIN:
            return {...state, isFetchingPosts: true};
        case FETCH_POSTS_SUCCESS:
            return {data: action.payload, isFetchingPosts: false};
        case FETCH_POSTS_FAILURE:
            return initialState;
        default:
            return state;
    }
}

export default posts;