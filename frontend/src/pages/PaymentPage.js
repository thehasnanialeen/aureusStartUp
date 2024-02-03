import React from "react";
import { useLocation } from 'react-router-dom';
import SimpleGooglePayButton from '../components/SimpleGooglePayButton';
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalAmount = searchParams.get('amount');
  const plan = totalAmount === '959' ? 'Professional Plan' : 'Basic Plan';

  // Sample order details
  const order = {
    orderId: '12345',
    totalAmount: `$${totalAmount}.00`,
    items: [plan],
  };

  return (
    <div className="PaymentPage">
      <div className="OrderDetails">
        <h2>Order Summary</h2>
        <p><strong>Order ID:</strong> {order.orderId}</p>
        <p><strong>Total Amount:</strong> {order.totalAmount}</p>
        <h3>Ordered Items:</h3>
        <p>
          {order.items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </p>
      
      <div className="PaymentButtonContainer">
        <SimpleGooglePayButton />
      </div>
      </div>
    </div>
  );
};

export default PaymentPage;