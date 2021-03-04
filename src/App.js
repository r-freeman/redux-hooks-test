import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from './actions';

function App() {
    // useSelector is the equivalent to mapStateToProps
    const posts = useSelector(state => state.posts);

    // useDispatch is the equivalent to mapDispatchToProps
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch the fetch posts action
        dispatch(actions.posts.fetchPosts());
    }, [dispatch])

    const isFetchingPosts = posts.isFetchingPosts;

    return (
        <div className="App">
            {isFetchingPosts ?
                <div>
                    <p>Loading posts</p>
                </div>
                : posts.data.map(post => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                    </div>
                ))
            }
        </div>
    );
}

export default App;
