import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

import WishList from './Pages/WishList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Pages/Card';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='card'element={<Card/>}/>
      <Route path='wishlist'element={<WishList/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
