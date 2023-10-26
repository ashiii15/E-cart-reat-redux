import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const wishlist = useSelector((state)=>state.wishListReducer)
    const cartlist = useSelector((state)=>state.cartReducer)
  return (
    <nav style={{zIndex:1}} className="navbar navbar-expand-lg navbar-light bg-secondary position-fixed w-100 ">
            <div className="container px-4 px-lg-5">
            
                <i className="fa-solid fa-cart-shopping m-2"></i>
                    <Link to='/' className="navbar-brand">E-cart</Link>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className=" flex justify-content-end collapse navbar-collapse" id="navbarSupportedContent" >
                    <form className="d-flex" >
                    <Link to={'/wishlist'} className="btn btn-outline-dark m-1" type="submit">
                    <i className="fa-solid fa-heart" style={{color: '#e00b20'}}></i>Whislist
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{wishlist.length}</span>
                        </Link>
                        <Link to={'/cart'} className="btn btn-outline-dark m-1" type="submit">
                        <i className="fa-solid fa-cart-shopping"></i> Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartlist.length}</span>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
  )
}

export default Header