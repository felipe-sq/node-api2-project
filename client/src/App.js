import './App.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import Post from './Post';

const App = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:5500/api/posts`)
      .then(res => {
        console.log(res.data);
          setPosts(res.data);
      })
      .catch(err => {
          console.log(err);
      })   
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome to HobbitPosts App!</h1>
        <h4>Stay up to date on LOTR posts below.</h4>
      </div><br/>
      <Button variant="warning">Submit Post</Button>
      <br/>
      <br/>

    <Post posts={posts} />
    
    </div>
  );
};

export default App;
