import React from 'react';
import { NavLink } from 'react-router-dom';


const Footersection = () => {
  return (
    <div className='footersection'>
      <p>&copy; <span>{(new Date().getFullYear())}</span> <NavLink to='/'>MySelf Resume</NavLink>.</p>
    </div>
  )
}

export default Footersection;