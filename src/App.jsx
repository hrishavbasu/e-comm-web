import React from 'react'
import "./App.css"
import {Navbar, Text, Carousel} from "./components/index"
import { BrowserRouter as Router } from 'react-router-dom'

function App (){
  return(
    <Router>
      <Navbar/>
      <Text></Text>
      <Carousel/>
    </Router>
  )
}

export default App;
