import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useFetch } from "../Components/Hook/useFetch";
import { useDispatch } from "react-redux";
import { addToWishList } from "../Redux/wishListSlice";
import { addToCart } from "../Redux/cartSlice";

function Home() {
  const data = useFetch("https://fakestoreapi.com/products");
  const dispatch =useDispatch()
  // console.log(data);
  return (
    <>
      <div className="d-flex justify-content-center">
        <Row style={{ marginTop: "6rem" }}>
          {data?.length > 0 ? (
            data?.map((products, index) => {
              const { image, title, description, price } = products;
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
                          onClick={() => dispatch(addToWishList(products))}
                          className="btn btn-light"
                          variant="primary"
                        >
                          <i
                            className="fa-solid fa-heart"
                            style={{ color: "#e00b20" }}
                          ></i>{" "}
                        </Button>
                        <Button onClick={()=>dispatch(addToCart(products))} className="btn btn-light" variant="primary">
                          <i className="fa-solid fa-cart-shopping"></i>{" "}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <p>Nothing to display</p>
          )}
        </Row>
      </div>

      <hr />
    </>
  );
}

export default Home;
