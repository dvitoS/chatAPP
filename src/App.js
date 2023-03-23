import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Chat from './Components/Chat/Chat';
import Navbar from './Components/Navbar/Navbar';
import Contacts from './Components/Contacts/Contacts';
import Settings from './Components/Settings/Settings';
import './App.css';



const App = () => {
  return(
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  )
  
}

export default App;
