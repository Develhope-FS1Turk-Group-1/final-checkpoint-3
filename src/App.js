import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import FilterResult from './FilterResult';
import FilterPageAgain from './FilterPageAgain';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/filterPage/" element={<FilterPageAgain/>}/>
        <Route path="/filterResult/" element={<FilterResult/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
