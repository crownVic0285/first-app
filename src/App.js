import logo from './logo.svg';
import {add, multiply} from './helpers.js'; 
import cats, {meow} from './cats'
import './App.css';

function App() {
  console.log (add(4,9));
  console.log(cats);
  console.log(meow());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HI I MADE A CHANGE!!!
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
