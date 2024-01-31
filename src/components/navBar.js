import React from 'react'
import './CSS/navbar.css'
import logo from '../assests/logo/logo.png'

function navBar() {
  return (
    <>
      <nav>
        <div className='fedxlogo'>
            <div className='logo'>
                <div className='logosvg'>
                <img src={logo} height="4px" width="4px" alt=""/>
                </div>
            </div>
            <div className='footer_logo_title'>FED</div>
        </div>


        <div className='navigation_links'>
            <div>Home</div>
            <div>About</div>
            <div>Sign in</div>
        </div>
      </nav>
    </>
  )
}

export default navBar
