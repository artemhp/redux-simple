import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [inputCounter, setInputCounter] = useState(1);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const name = useSelector((state) => state.loginName);
  const addHandler = () => {
    dispatch({
      type: 'PLUS',
      payload: inputCounter,
    });
  };
  const minusHandler = () => {
    dispatch({
      type: 'MINUS',
      payload: inputCounter,
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>Welcome, {name}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div>
          <button onClick={addHandler}>+ {inputCounter}</button>
          {counter}
          <button onClick={minusHandler}>- {inputCounter}</button>
        </div>
        <div>
          <input
            type="text"
            value={inputCounter}
            onChange={(event) => {
              setInputCounter(event.target.value);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
