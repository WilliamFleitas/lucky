import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./components/home/Home";


  
function App() {
  

  return (
    <div className="flex flex-col items-center justify-center content-center text-white h-screen">
      
      <Routes>
        
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />


        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </div>
  );
}

export default App;