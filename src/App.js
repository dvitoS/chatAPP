import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from '../src/Register/Register';
import Login from '../src/Login/Login';
import Home from './Components/Home/Home';
import Chat from './Components/Chat/Chat';
import Navbar from './Components/Navbar/Navbar';
import Contacts from './Components/Contacts/Contacts';
import Settings from './Components/Settings/Settings';
import { AuthContext } from './context/AuthContext';
import './App.css';



const App = () => {

  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />
    }

    return children;
  }


  return(
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/"
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
  
}

export default App;
