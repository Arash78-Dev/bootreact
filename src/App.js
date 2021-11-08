import { BrowserRouter , Routes,Route } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Home from './component/Home'
import Navbars from './component/Navbar';
import News from './component/News';

function App() {
  return (
    
    <BrowserRouter>
    <Navbars/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/about" element={<About/>}></Route>
        <Route  path="/news" element={<News/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
