import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';


const comments = [
  {name: 'jehoon', content: 'first coment'},
  {name: 'je', content: 'second coment'},
  {name: 'hoon', content: 'third coment'},
]
function App() {
  return (
    <div className="App" style={{padding: 16, backgroundColor: '#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {comments.map((comment, index) => {
          return(
            <Comment name={comment.name} content={comment.content}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
