import React ,{Component} from 'react';
import {Link } from 'react-router-dom';
import Logo from '../assest/image/logo1.jpg';
import '../App.css';

export default class Navbar extends Component{
   render(){
       return(
           <nav className="navbar navar-expand-sm navbarwrapper px-sm-5">
               <Link to="/">
                   <img src={Logo} alt="store" className="navbar-brand logo" />
               </Link>
                <ul className="navbar-nav flex">
                    <li className="nav-item ml-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item ml-2">
                        <Link to="/productlist">Products</Link>
                    </li>
                    
                </ul>
                <Link to="/cart">
                        <button type="button" className="btn btn-outline-primary">
                            <i className="fas fa-cart-plus mr-3" />
                            My Cart
                        </button>
                </Link>
           </nav>
       )
   }
}
