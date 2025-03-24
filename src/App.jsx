import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/home';
import  Navbar  from './components/Navbar/Navbar';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
