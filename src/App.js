import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A language learning app !</h1>
      </header>
      <div className="Language-select">
        <div className="Language-select-left">
          <div className="Language-select-left-item">
            <a href="/english">EN 🇬🇧</a>
          </div>
          <div className="Language-select-left-item" style={{"marginRight" : "5em"}}>
            <a href="/chinese">CH 🇨🇳</a>
          </div>
          <div className="Language-select-left-item">
            <a href="/japanese">JP 🇯🇵</a>
          </div>

        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Language-select-right">
          <div className="Language-select-right-item">
            <a href="/french">FR 🇫🇷</a>
          </div>
          <div className="Language-select-right-item" style={{"marginLeft" : "5em"}}>
            <a href="/espanol">ES 🇪🇸</a>
          </div>
          <div className="Language-select-right-item">
            <a href="/deutsch">DE 🇩🇪</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
