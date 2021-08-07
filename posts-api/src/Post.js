import React from 'react';
import axios from 'axios';

const Post = (props) => {

    const { post } = props;

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.contents}</p>
            <p>{post.comments}</p>
        </div>
    );
}