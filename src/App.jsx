import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Article from './pages/Article';
import Connect from './pages/Connect';

function App() {

    return (
        <Router>
            <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = '/services' element = {<Services />} />
                <Route path = '/solutions' element = {<Solutions />} />
                <Route path = '/about' element = {<About />} />
                <Route path = '/article' element = {<Article />} />
                <Route path = '/connect' element = {<Connect />} />
            </Routes>
        </Router>
    ) 
}

export default App
