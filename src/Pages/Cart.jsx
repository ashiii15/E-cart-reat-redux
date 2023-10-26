import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const carts = useSelector((state) => state.cartReducer);
  console.log(carts);
  return (
    <div style={{ marginTop: "5rem" }}>
      {carts.length > 0 ? (
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
                    <button>
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
      ) : (
        <p>Nothing to display</p>
      )}
    </div>
  );
}

export default Cart;
