import './App.css';
import Home from './pages/home';
import { BrowserRouter as  Router,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPI from './pages/index/spi'

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/spi" element={<SPI/>} />
        </Routes>
      
    </Router>  
  );
}

export default App;
