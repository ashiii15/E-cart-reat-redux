import React from "react";
import { Row,Button,Card,Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromWishList } from "../Redux/wishListSlice";
import { addToCart } from "../Redux/cartSlice";

function WishList() {
  const WhislistArray = useSelector((state) => state.wishListReducer);
  const dispatch = useDispatch()
  const addToCartFromWishList=(products)=>{
    dispatch(addToCart(products))
    dispatch(deleteFromWishList(products.id))
  }
  // const removeWishList =(id)=>{
  //   console.log("remove wishlist");
  //   return dispatch(deleteFromWishList(id))
  // }
  console.log(WhislistArray);
  return (
    <div>
      <Row style={{marginTop:"5rem"}}>
        {WhislistArray?.length > 0 ? (
          WhislistArray?.map((products, index) => {
            const { id,image, title, description, price } = products;
            return (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Card className="mt-2 mb-2 ms-4" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={image} height={"250px"} />
                  <Card.Body>
                    <Card.Title>
                      <p>{title.slice(0, 40)}...</p>
                    </Card.Title>
                    <Card.Text>
                      <p>{description.slice(0, 50)}...</p>
                    </Card.Text>
                    <h5 className="fw-bold">${price}</h5>
                    <div className="d-flex justify-content-between">
                      <Button
                      onClick={()=>dispatch(deleteFromWishList(id))}
                        className="btn btn-light"
                        variant="primary"
                      >
                        <i
                          className="fa-solid fa-trash"
                          style={{ color: "#e00b20" }}
                        ></i>{" "}
                      </Button>
                      <Button onClick={()=>addToCartFromWishList(products)}
                        className="btn btn-light"
                        variant="primary"
                      >
                        <i className="fa-solid fa-cart-shopping"></i>{" "}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <p>WishList is empty!!!</p>
        )}
      </Row>
    </div>
  );
}

export default WishList;
