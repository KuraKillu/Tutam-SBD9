import React from "react";
import Login from './pages/LoginPage';
import Navbar from './assets/Navbar'

function App(){
  return(
    <div>
      <Navbar/>
      <div>
        <Login/>
      </div>
    </div>
  )
}

export default App;