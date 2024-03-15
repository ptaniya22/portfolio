import React from 'react';
import { Link, Element } from 'react-scroll';
import Navbar from './components/Navbar';
import About from './components/About';
import './scss/main.scss'


function App() {
 
 
  // const wrapperClass = `wrapper ${theme}`
  


  return (
    <>
      {/* <div className={wrapperClass}> */}
    
      <div className="container">
        <div className="box">
          <Navbar />
          <About/>
        </div>
        
     </div>
      
      {/* </div> */}
      
      
    </>
  );
}

export default App;