import React,{useContext} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';

function Navbar() {
    let data = useContext(CartContext);
    let total_item_count = data.cart.qty;
    return (
        <div >
            <nav>
            <ul className = "left">
                <li className="logo"> <Link to = '/' >E-Store</Link> </li>
            </ul>
            <ul className = "right">
                <li> <Link to='/cart' ><span className="cart_icon"><i class="fas fa-shopping-cart"></i></span> </Link></li>
                <li> <Link to='/cart'> <span className="cart_count"> {total_item_count} </span></Link> </li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar
