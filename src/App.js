
import './App.css';
import {
  BrowserRouter, Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Skills from './Pages/Skills';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Sections/Header';
import Body from './Sections/Body';
import Footer from './Sections/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
