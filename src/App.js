import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <p>
         React Work Shop 101
        </p>
        <a
          className="App-link"
          href="/menu"
          target="_self"
          rel="noopener noreferrer"
        >
          Enter Site
        </a>
      </header>
    </div>
  );
}

export default App;
