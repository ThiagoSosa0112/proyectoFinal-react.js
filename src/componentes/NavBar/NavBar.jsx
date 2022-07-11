import React from 'react'
import CartWidget from '../CartWidget';
import './NavBar.css';
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return(
        <ul className='menu'>
            <li className='links'><Link to='/'>Home</Link></li>
            <li className='links'><a href="#"> Contact </a></li>
            <li className='links'><Link to='/category/productos'>Productos</Link></li>
            <li className='links'><a href="#"> Galery </a></li>
            <CartWidget/>
        </ul>

    )
}    
export default NavBar
                                                