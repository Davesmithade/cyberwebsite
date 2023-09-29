import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import EnrolNow from './pages/enrolnow/EnrolNow';


const App = () => {
  return (
    <>
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="/enrolnow" element={<EnrolNow />} />
            {/* <Route path="/login" element={<Login/>} />
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