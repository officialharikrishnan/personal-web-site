import React, { useContext } from 'react'
import { HomeRedirect } from '../Context/Homecontext'
import './Header.css'

function Header() {
    const {HomeButton} = useContext(HomeRedirect)

    return (
        <div className='header'>
            <ul>
                {HomeButton && <li><a href="/"><h2> Home </h2></a></li> }
                <li><a href="/skills"><h2> Skills </h2></a></li>
                <li><a href="/about"><h2>About</h2></a></li>
                <li><a href="/contact"><h2>Contact</h2></a></li>
            </ul>


        </div>
    )
}

export default Header