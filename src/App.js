import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from '../src/Register/Register';
import Login from '../src/Login/Login';
import Home from './Components/Home/Home';
import Chat from './Components/Chat/Chat';
import Contacts from './Components/Contacts/Contacts';
import Settings from './Components/Settings/Settings';
import { AuthContext } from './context/AuthContext';
import './App.css';



const App = () => {

  const {currentUser} = useContext(AuthContext);
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />;
    }

    return children;
  }


  return(
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<ProtectedRoute>
                <Home />
            </ProtectedRoute>}/>
          <Route path="chat" element={<ProtectedRoute>
            <Chat />
          </ProtectedRoute>} />
          <Route path="contacts" element={<ProtectedRoute>
            <Contacts />
          </ProtectedRoute>} />
          <Route path="settings" element={<ProtectedRoute>
            <Settings />
          </ProtectedRoute>} />
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
  
}

export default App;
