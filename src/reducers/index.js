import {combineReducers} from 'redux';
import posts from './posts';

// combine multiple reducers with combineReducers middleware
const rootReducer = combineReducers({
    // add reducers here
    posts
});

// export a single root reducer
export default rootReducer;