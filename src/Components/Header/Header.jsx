import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='navbar'>
            <div className='nav01'>
                <a href=''>HootSuite</a>
                <a href=''>Plateform</a>
                <a href=''>Plans</a>
                <a href=''>Enterprise</a>
                <a href=''>Resources</a>
                <a href=''>Education</a>

            </div>
            <div className='nav02'>
                <a href=''>Contact Us</a>
                <a href=''>Log In</a>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Header