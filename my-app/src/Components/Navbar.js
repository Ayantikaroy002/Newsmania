import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
     <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      < Link to="/" className="flex title-font font-medium items-center text-purple-800 mb-4 md:mb-0"/>
      
      <span className="ml-3 text-2xl font-serif">NEWSMANIA</span>
    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-purple-500" to="/">Home</Link>
      <Link className="mr-5 hover:text-purple-500" to="/business">Business</Link>
      <Link className="mr-5 hover:text-purple-500" to="/entertainment">Entertainment</Link>
      
      <Link className="mr-5 hover:text-purple-500" to="/health">Health</Link>
      <Link className="mr-5 hover:text-purple-500" to="/science">Science</Link>
      <Link className="mr-5 hover:text-purple-500" to="/sports">Sports</Link>
      <Link className="mr-5 hover:text-purple-500" to="/technology">Technology</Link>
      <Link className="mr-5 hover:text-purple-500"to="/about">About</Link>
    </nav>
    <button className="inline-flex items-center bg-purple-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-purple-700 rounded text-base mt-4 md:mt-0">Log in
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

    </>
  )
}
}

export default Navbar
