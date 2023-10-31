import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCartList } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const carts = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [total,setTotal] =useState(0)
// const removeCart= (id)=>{
// dispatch(removeFromCartList(id))
// }
  // console.log(carts);
  const totalAmount =()=>{
    if(carts.length >0){
      setTotal(carts.map((cart)=>cart.price).reduce((p1,p2)=>p1+p2))

    }
    else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    totalAmount()
  },[carts])
  const emptyCartList =()=>{
    alert("Order placed successfully!!!")
    dispatch(emptyCart())
    navigate('/')

  }
  return (
    <div style={{ marginTop: "5rem" }}>
      {carts.length > 0 ? (

<div className="row ms5 me-5">
         <div className="col-md-8">
            <table className="container mt-5 table border rounded p-5">
              <thead>
                <th>#</th>
                <th>productName</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </thead>
              <tbody>
                {carts.length > 0 ? (
                  carts.map((cart, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{cart.title}</td>
                      <td>
                        <img
                          height={"80px"}
                          width={"80px"}
                          src={cart.image}
                          alt={cart.title}
                        />
                      </td>
                      <td>{cart.price}</td>
                      <td>
                        <button onClick={()=>dispatch(removeFromCartList(cart.id))}>
                          <i 
                            className="fa-solid fa-trash"
                            style={{ color: "#e00b20" }}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>nothing display</p>
                )}
              </tbody>
            </table>
         </div>
         <div className="col-md-1">
          <div className="col-lg-3 mt-5">
            <h3 className="fw-bolder text-primary mb-5">Cart array</h3>
            <h5>total products :<span>3</span></h5>
            <h4>total : $
              <span>{total}</span>
            </h4>
            <button onClick={emptyCartList} style={{background:'darksalmon'}} className="btn btn-sucess rounded">CheckOut</button>
          </div>

         </div>
  
</div>      ) : (
        <p>Nothing to display</p>
      )}
    </div>
  );
}

export default Cart;
