/* eslinit-disable no-unused-vars */
import './App.css';
import Home from './Components/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage';


function App() {
  
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;