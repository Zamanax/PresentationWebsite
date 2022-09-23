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
            <a href="/english">English - <img className='Language-select-item-image' src='Images/Flags/English.svg' alt="English Flag"/></a>
          </div>
          <div className="Language-select-left-item" style={{"marginRight" : "6em"}}>
            <a href="/chinese">Chinese - 中文 - <img className='Language-select-item-image' src='Images/Flags/Chinese.svg' alt="English Flag"/></a>
          </div>
          <div className="Language-select-left-item">
            <a href="/japanese">Japanese - 日本語 - <img className='Language-select-item-image' src='Images/Flags/Japanese.svg' alt="English Flag"/></a>
          </div>

        </div>
        <img src="Images/logo.svg" className="App-logo" alt="logo" />
        <div className="Language-select-right">
          <div className="Language-select-right-item">
            <a href="/french">French - Français - <img className='Language-select-item-image' src='Images/Flags/French.svg' alt="English Flag"/></a>
          </div>
          <div className="Language-select-right-item" style={{"marginLeft" : "5em"}}>
            <a href="/espanol">Spanish - Español - <img className='Language-select-item-image' src='Images/Flags/Spanish.svg' alt="English Flag"/></a>
          </div>
          <div className="Language-select-right-item">
            <a href="/deutsch">German - Deutsch - <img className='Language-select-item-image' src='Images/Flags/German.svg' alt="English Flag"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
