import logo from './logo.svg';
import './App.css';
import Home from './cms/Home';
import Header from './partials/Header';
import Footer from './partials/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './cms/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about'element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
        
    </div>
  );
}

export default App;
