import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';


const App = () => {
  return (
    <>
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            {/* <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/buy" element={<Buy/>} />
            <Route path="/sell" element={<Sell/>} />
            <Route path="/rent" element={<Rent/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App