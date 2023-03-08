import logo from './logo.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Services from './components/Services/Services';
import Carrer from './components/Carrer/Carrer';
import NotFound from './components/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
        
        <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/courses' element={<Courses/>}></Route>
              <Route path='/pricing' element={<Pricing/>}></Route>
              <Route path='/services' element={<Services/>}></Route>
              <Route path='/carrer' element={<Carrer />}></Route>
              <Route path='/contact' element={<ContactUs />}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    
      
    </div>
  );
} 


export default App;
