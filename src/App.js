import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from './actions';

function App() {
    // useSelector is the equivalent to mapStateToProps
    const counter = useSelector(state => state.counter);

    // useDispatch is the equivalent to mapDispatchToProps
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch the counter reset action
        dispatch(actions.counter.reset());
    }, [dispatch])

    return (
        <div className="App">
            <h1>Current value of counter is {counter}</h1>

            <div>
                <button type="button"
                        onClick={() => dispatch(actions.counter.increment())}>
                    Increment
                </button>
                <button type="button"
                        onClick={() => dispatch(actions.counter.decrement())}>
                    Decrement
                </button>
                <button type="button"
                        onClick={() => dispatch(actions.counter.reset())}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default App;
