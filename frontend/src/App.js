import React from 'react';
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import View from './pages/View';


function App() {
  return (
    
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/dashboard" element={<Dashboard/>}></Route>
         <Route path="/user" element={<User/>}></Route>
         <Route path="/View" element={<View/>}></Route>
         
       </Routes>
        
      </BrowserRouter>
        
        
        
      </div>
    
  );
}

export default App;
