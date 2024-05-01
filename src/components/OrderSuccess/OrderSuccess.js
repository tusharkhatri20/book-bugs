import React, { useContext } from 'react'
import "./OrderSuccess.css"
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';

export const OrderSuccess = () => {
    const navigate = useNavigate();
    const {setCart} = useContext(CartContext);
  return (
    <div className='orderSuccessModalMain'>
    <div className="orderSuccessModal">
        <div className="orderSuceessContent">
            <h2>Order Placed!</h2>
            <p>You will receive order details and delivery updates on your registered email shortly.</p>
            <button onClick ={()=>{navigate("/"); setCart([])}} className='actionBtn'>Continue Shopping</button>
        </div>
    </div>
    </div>
  )
}
