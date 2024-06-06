import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './page/navbar';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Footer from './page/footer';
import Home from './page/home';
import data from './page/data';
import './App.css';
import galery from './page/galeria';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home banner={data.banner} images={data.images} tag={data.tag} />} />
            <Route path="/page1" element={<Page1 images={galery.images} />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
