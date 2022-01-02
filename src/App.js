import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';


// <><head><meta name="viewport" content="initial-scale=1, width=device-width" /></head><>
//   <link
//     rel="stylesheet"
//     href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
//   <link
//     rel="stylesheet"
//     href="https://fonts.googleapis.com/icon?family=Material+Icons" />
// </></>

function App() {

  // return <Button variant="contained">Hello World</Button>;


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit to <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
