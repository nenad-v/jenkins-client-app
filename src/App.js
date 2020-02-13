import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const api = 'http://localhost:5000/api';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(api + '/posts')
            .then(res => {
                setPosts(res.data)
            })
    }, [])

    return (
        <div className="app">
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default App;