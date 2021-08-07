import './App.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Post from './Post';

const App = (props) => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to Posts App!</h2>
      </div>
      <p className="App-intro">
        Stay up-to-date on all the recent posts below.
      </p>

    <Post posts={posts} />
    
    </div>
  );
};

export default App;
