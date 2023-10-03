import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Banner from './components/Banner';
import Specials from './components/Specials';
import AboutUs from './components/AboutUs';

export default function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}
