import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <ul>
                <li><a href="/skills"><h2> Skills </h2></a></li>
                <li><a href="/about"><h2>About</h2></a></li>
                <li><a href="/contact"><h2>Contact</h2></a></li>
            </ul>


        </div>
    )
}

export default Header