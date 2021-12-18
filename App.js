import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Footer from './Footer';
import NewPost from './NewPost';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Homepage/>} /> 
        <Route path='/newpost' element = {<NewPost/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
