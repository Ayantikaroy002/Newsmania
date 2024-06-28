import React, { Component } from 'react'
import loading from '../loading.svg';

export class Spinner extends Component {
  render() {
    return (
      <div className=' flex items-center justify-center bg-[#233a47]'>
        <img src={loading} alt="Loading..." />
      </div>
    ) 
  }
}

export default Spinner
