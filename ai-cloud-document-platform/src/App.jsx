import React from 'react'
import LoginForm from './pages/Login.jsx'
import HomeDashBoard from "./pages/Dashboard.jsx"


import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const user = false
  return (<BrowserRouter>
  <Routes>
    <Route path="/*" element={user ? <HomeDashBoard /> : <Navigate to="/login" />} />
    <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/" />} />
  </Routes>
  </BrowserRouter>

  )
}


export default App
