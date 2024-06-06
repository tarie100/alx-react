//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Holberton-logo*/}
        <img src="holberton-logo.jpg" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        {/* Paragraph for login */}
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        {/* Copyright information */}
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;