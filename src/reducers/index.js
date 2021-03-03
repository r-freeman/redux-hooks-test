import {combineReducers} from 'redux';
import counter from './counter';

// combine multiple reducers with combineReducers middleware
const rootReducer = combineReducers({
    // add reducers here
    counter
});

// export a single root reducer
export default rootReducer;