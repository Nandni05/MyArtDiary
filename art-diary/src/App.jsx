import React, { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Photos from './Components/Photos';

function App() {
  const [isOpen, setisOpen]= useState(false);

  const togglePage=()=>{
    setisOpen((prev)=>!prev);
  };

  return (
    <div>
      {
        isOpen?<Photos/>:<Header toggle={togglePage}/>
      }
    </div>
  )
}

export default App
