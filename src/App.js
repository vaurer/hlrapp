
import './App.css';

import reiseFinden from './reiseFinden';
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <p>before</p>
        <div id="hlrApp"></div>
        <p>after</p>
        <p>Results:</p>
        <div id="hlrAppBooking"></div>
      </header>
    </div>
  );
}

export default App;
