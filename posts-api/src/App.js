import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = (props) => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Posts App!</h2>
      </div>
      <p className="App-intro">
        Stay up-to-date on all the recent posts below.
      </p>
    </div>
  );
};

export default App;
