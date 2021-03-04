import {BASE_URL} from '../api';
import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS
} from '../types';

const fetchPosts = () => async (dispatch) => {
    try {
        dispatch({type: FETCH_POSTS_BEGIN});

        // make an asynchronous fetch request
        const request = await fetch(`${BASE_URL}/posts`);

        if (request.status === 200) {
            const posts = await request.json();

            // dispatch takes an object parameter with type and optional payload
            dispatch({type: FETCH_POSTS_SUCCESS, payload: posts});
        } else {
            dispatch({type: FETCH_POSTS_FAILURE})
        }
    } catch (err) {
        console.log(err);
        dispatch({type: FETCH_POSTS_FAILURE});
    }
}

export const posts = {fetchPosts}
