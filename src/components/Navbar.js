import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {logout} from '../actions/userActions'


const Navbar = () => {

    
const cartReducer=useSelector(state=>state.cartReducer)

const currentUser=JSON.parse(localStorage.getItem('currentUser'))

const dispatch=useDispatch()

const{cartItems}=cartReducer
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ecOct</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                   
                <ul className="navbar-nav ms-auto">
                    {currentUser ? ( <nav class="navbar navbar-expand-lg">
  <div className="container-fluid">
    
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle plg" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             {currentUser.name}
           
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" onClick={()=>{dispatch(logout())}}>Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>) :( <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>)}
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i> {cartItems.length} </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
