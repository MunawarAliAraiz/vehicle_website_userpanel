import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";


const SuccessPage = () => {
  const serverUrl = 'http://localhost:4000';
  const { carId, carName, quantity, price } = useParams();
  const navigate = useNavigate() 

  useEffect(() => {
    // Parse query parameters from the URL
    async function createOrder() {
          try {
              const orderData = {
                  carId: carId,
                  carName: carName,
                  price: price,
                  quantity: quantity,
                  totalPrice: price*quantity,
              };
              console.log(orderData)
              const response = await fetch(`${serverUrl}/api/orders/create`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'auth-token': Cookies.get('token'),
                  },
                  body: JSON.stringify(orderData), // Replace orderData with your order details
              });

              const data = await response.json();
              console.log('Order created:', data);
          } catch (error) {
            alert(error)
              // Handle error
          }
      }

    // Call createOrder function with carId and quantity
    createOrder();
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, []);

  return (
    <div style={{marginTop:'150px'}} className="container d-flex justify-content-center align-items-center vh-50">
    <div className="text-center">
      <h1>Payment Successful</h1>
      <p>Your order has been successfully processed.</p>
      <p>Redirecting to homepage...</p>
      <Link to="/" className="btn btn-primary mt-3">Go to Homepage</Link>
    </div>
  </div>
  );
};

export default SuccessPage;