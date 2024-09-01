import React from 'react'
import "./nav.css"
function nav() {
  return (
    <div className='NavContainer'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        <a href='/search'>Search</a>

    </div>
  )
}

export default nav