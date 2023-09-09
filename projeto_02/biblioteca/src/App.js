import logo from './logo.svg';
import './App.css';
import './components/Lista'
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <main>
        <div className="section-main">
          <Lista></Lista>
          <h1>Testando página</h1>
        </div>
      </main>
      </header>
      
    </div>
  );
}

export default App;
