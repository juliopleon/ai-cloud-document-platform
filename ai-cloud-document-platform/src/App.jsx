import React from 'react'
import LoginForm from './pages/Login.jsx'


import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const user = true
  return (<BrowserRouter>
  <Routes>
    <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/" />} />
  </Routes>
  </BrowserRouter>

  )
}


export default App
