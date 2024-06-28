import "./App.css";
import React, { Component} from "react"

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
  return (
    
    <div>
   
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<News key="general" apiKey={this.apiKey} pageSize={15} country="us" category="general"/>} />
            
          
          <Route path="/business" element={<News key="business" apiKey={this.apiKey} pageSize={15} country="us" category="business"/>} />
           
          <Route  path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} pageSize={15} country="us" category="entertainment"/>} />
            
         
            
          <Route  path="/health" element={<News key="health" apiKey={this.apiKey} pageSize={15} country="us" category="health"/>} />
           
          <Route  path="/science" element={<News key="science" apiKey={this.apiKey} pageSize={15} country="us" category="science"/>} />
           
          <Route  path="/sports" element={<News key="sports" apiKey={this.apiKey} pageSize={15} country="us" category="sports"/>} />
          <Route  path="/technology" element={<News key="technology" apiKey={this.apiKey} pageSize={15} country="us" category="technology"/>} />
         
        </Routes>

        

        <Footer />
      </Router>
    </div>
  )
}

}
