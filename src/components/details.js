import { useEffect, useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
// import { Tab, Tabs } from "react-bootstrap";
// import { Card, CardBody, CardTitle } from "reactstrap";
import { MDBSpinner } from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";
// import { Rating } from "react-simple-star-rating";
import Cookies from "js-cookie";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { serverUrl } from '../utils/serverUrl';
import { stripe_public_key } from '../utils/stripe_pk';

function ReviewData() {
  // const [showForm, setShowForm] = useState(false);
  // const [rating, setRating] = useState(0);
  // const [data, setData] = useState([]);
  // const [similar, setSimilar] = useState([]);
  // const [submit, setSubmit] = useState(false);
  // const [reviewSubmit, setReviewsubmit] = useState(false);
  // const [reviews, setReviews] = useState([]);
  // const [buySubmit, setBuysubmit] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    window.scrollTo(0, 0);
    // getProducts();
    // getReviews();
    const fetchCar = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/cars/${id}`);
        setCar(response.data.car);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchCar();
  }, [id])

  // const handleCancel = () => {
  //   setShowForm(false);
  // };

  // const handleRating = (rate) => {
  //   setRating(rate);
  // };

  // async function getProducts() {
  //   await fetch(`${process.env.REACT_APP_BASE_URL}/getInventory`, {
  //     method: "GET",
  //     headers: {
  //       "api-key": process.env.REACT_APP_API_KEY,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Request failed.");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data.data.filter((item) => item.Id === id && item.Active === 1));
  //       const filterId = data.data.filter((item) => item.Id === id);
  //       setSimilar(data.data.filter((item) => item.brandName === filterId[0].brandName && item.Id !== filterId[0].Id && item.Active === 1));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // async function getReviews() {
  //   await fetch(`${process.env.REACT_APP_BASE_URL}/getReviews?id=${id}`, {
  //     method: "GET",
  //     headers: {
  //       "api-key": process.env.REACT_APP_API_KEY,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Request failed.");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setReviews(data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // const handleCart = async (e) => {
  //   if (Cookies.get("userId") == null || Cookies.get("userId") == "") {
  //     alert("Login to add product to cart");
  //   }
  //   else {
  //     setSubmit(true);
  //     const Data = {
  //       userId: Cookies.get("userId"),
  //       productId: id,
  //       quantity: quantity,
  //     }

  //     try {
  //       const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/addtoCart`, Data, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "api-key": process.env.REACT_APP_API_KEY,
  //         },
  //       });

  //       const responseData = response.data;
  //       if (responseData.message === "added") {
  //         window.location.href = "/cart";
  //       }
  //       else if (responseData.message === "already") {
  //         setSubmit(false);
  //         alert("Product Already added to your cart");
  //       }
  //     } catch (error) {
  //       console.error('Error:', error.message);
  //       setSubmit(false);
  //     }
  //   }
  // };

  // const handleBuy = async (image, price) => {
  //   if (Cookies.get("userId") === null || Cookies.get("userId") === "") {
  //     alert("Login to buy product");
  //   }
  //   else {
  //     setBuysubmit(true);
  //     const Data = {
  //       userId: Cookies.get("userId"),
  //       productId: id,
  //       quantity: quantity,
  //       image: image,
  //       price: price,
  //     }

  //     try {
  //       const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/buyProduct`, Data, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "api-key": process.env.REACT_APP_API_KEY,
  //         },
  //       });

  //       const responseData = response.data;
  //       setBuysubmit(false);
  //       if (responseData.message === "outofstock") {
  //         alert("Product is out of stock");
  //       }
  //       else {
  //         window.location.href = responseData.sessionUrl;
  //       }
  //     } catch (error) {
  //       console.error('Error:', error.message);
  //       setSubmit(false);
  //     }
  //   }
  // };

  // const handleReview = async (event) => {
  //   event.preventDefault();
  //   if (Cookies.get("userId") === null || Cookies.get("userId") === "") {
  //     alert("Login to give review");
  //   }
  //   else {
  //     setReviewsubmit(true);
  //     const review = document.getElementById("review").value;
  //     const Data = {
  //       userId: Cookies.get("userId"),
  //       productId: id,
  //       rating: rating,
  //       review: review,
  //     }

  //     try {
  //       const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/review`, Data, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "api-key": process.env.REACT_APP_API_KEY,
  //         },
  //       });

  //       const responseData = response.data;
  //       setReviewsubmit(false);
  //       if (responseData.message === "already") {
  //         alert("You have already gave a review");
  //       }
  //       else {
  //         setShowForm(false);
  //         getReviews();
  //       }
  //     } catch (error) {
  //       console.error('Error:', error.message);
  //     }
  //   }
  // };
  
  const makePayment = async () => {
    try {
      const authToken = Cookies.get('token');
      
      if (!authToken) {
        // Token is not available, redirect to login
        alert('Please login first');
        // Redirect to login page or perform any other action
        return;
      }
  
      const stripe = await loadStripe(stripe_public_key);
      const products = [];
      
      const product_obj = {};
      product_obj['id'] = car._id;
      product_obj['quantity'] = quantity;
      product_obj['price'] = car.price;
      product_obj['name'] = car.name;
      product_obj['image'] = car.img;
      products.push(product_obj);
  
      const body = {
        products: products
      };
  
      const response = await fetch(`${serverUrl}/api/users/checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': authToken,
        },
        body: JSON.stringify(body)
      });
  
      const session = await response.json();
  
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });
  
      // Code here will execute after the redirect completes
      result.on('redirect', (event) => {
        // Code to execute after the redirect
        console.log('Redirecting to checkout page');
        alert('Payment Successful');
      });
  
      // Handle errors if any during redirect
      result.on('error', (error) => {
        alert(error.message);
      });
    } catch (error) {
      console.error('Error making payment:', error);
      // Handle error
      alert(error);
    }
  }
  

  // function generateGoldenStars(num) {
  //   const goldenStar = '\u2B50';
  //   let stars = "";
  //   for (let i = 1; i <= parseInt(num); i++) {
  //     stars = (goldenStar + ' ').repeat(i);
  //   }
  //   return stars;
  // }


  return (
    <div className="ReviewDataclass" style={{ marginTop: "10%" }}>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <Col lg={6}>
              <div className="rounded-4 mb-3 d-flex justify-content-center">
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "500px",
                    width: "500px",
                    height: "600px",
                  }}
                  src={car.img}
                  alt="Car Img"
                />
              </div>
            </Col>
            <Col lg={6} style={{ textAlign: "left" }}>
              <div className="ps-lg-3">
                <div>
                  <h4 className="title text-dark">Car Details</h4>
                  <p><strong>Car Type:</strong> {car.carType}</p>
                  <h4 style={{ fontFamily: "bahnschrift", marginTop: "-13px" }}>
                    {car.name}
                  </h4>

                  <div className="mb-3">
                    <p><strong>Price:</strong> {car.price} $</p>
                    <p><strong>Model:</strong> {car.model}</p>
                    <p><strong>Number:</strong> {car.no}</p>
                    <p><strong>Registered In:</strong> {car.registeredIn}</p>
                    <p><strong>Color:</strong> {car.color}</p>
                    <p><strong>Assembly:</strong> {car.assembly}</p>
                    <p><strong>Engine Capacity:</strong> {car.engineCapacity}</p>
                    <p><strong>Body Type:</strong> {car.bodyType}</p>
                  </div>
                </div>

                <p style={{ textAlign: "justify" }}></p>

                <hr />
                <Row className="mb-4">
                  <Col md={4} xs={6} className="mb-3">
                    <Form.Label className="mb-2 d-block">Quantity</Form.Label>
                    <div
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <Button
                        variant="white"
                        className="border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        onClick={() => {
                          if (quantity - 1 > 0) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        <i className="fas fa-minus"></i>
                      </Button>
                      <Form.Control
                        type="text"
                        className="text-center border border-secondary"
                        id="quantity"
                        value={quantity}
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <Button
                        variant="white"
                        className="border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        <i className="fas fa-plus"></i>
                      </Button>
                    </div>
                  </Col>
                </Row>
                {/* {data.map((item,index)=>( */}
                <div>
                  <Button
                    variant="warning"
                    className="shadow-0"
                    style={{ marginRight: "5px", backgroundColor: "#9e1030", color: "white" }}
                    onClick={() => {
                      makePayment()
                    }}
                  >
                    {false ? (
                      <center><MDBSpinner style={{ color: "white" }}></MDBSpinner></center>
                    ) : (
                      <span>Buy Now</span>
                    )}
                  </Button>
                </div>
                {/* ))}  */}
              </div>
            </Col>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ReviewData;
