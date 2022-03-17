import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Intro from './components/Introduction/Intro';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar/>
    <Intro/>
    </Router>
  );
}

export default App;
