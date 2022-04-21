import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Greetings from './components/greetings';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Greetings/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
