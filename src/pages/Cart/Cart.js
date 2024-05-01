import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavigationBar } from "../../components/NavigationBar"
import { CartContext } from "../../contexts/CartContext"
import "./Cart.css"
import { WishListContext } from "../../contexts/WishListContext";
import { ToastContext } from "../../contexts/ToastContext";
export const Cart = () => {
    const { cart, totalItems, priceOfAllItems, totalPriceDiscount, couponDiscount, totalPrice, applyCouponHandler, isCouponApplied, removeFromCartCartHandler, productQuantityIncrement, productQuantityDecrement } = useContext(CartContext);
    const { wishList, addToWishListHandler } = useContext(WishListContext);
    const { notify } = useContext(ToastContext);
    return (
        <>

            <NavigationBar />

            <div className="cartBox">
                <div className="cartHeading">
                    <h2>My Cart({cart.length})</h2>
                </div>
                {cart.length === 0 ? (<div className="emptyCart"><h3>There are no books in the cart</h3></div>) : (<div className="cart">
                    <div className="cartItemsDiv">
                        {
                            cart.map((item) => {
                                const { _id, name, img, author, price, originalPrice, rating, quantity } = item;
                                return (
                                    <div key={_id} className="cartItem">
                                        <div className="cartItemDetailsDiv">
                                            <NavLink to={`/products/${_id}`}> <div className="cartItemImgDiv"><img className="cartItemImg" src={`${img}`} alt="cartItemImg" /></div></NavLink>
                                            <div className="cartItemDetails">
                                                <h4><NavLink to={`/products/${_id}`}>{name}</NavLink></h4>
                                                <h5>Author: <b>{author}</b></h5>
                                                <h5>Rating: <b>{rating}</b></h5>
                                                <h4><b>₹{price}</b> <s> ₹{originalPrice}</s> <small className="discountPercentage">{Math.round(((originalPrice - price) / originalPrice) * 100)}% off</small> </h4>
                                                <div className="quantity">
                                                    <button className="decrement" onClick={() => productQuantityDecrement(item)} disabled={quantity === 1}>-</button>
                                                    <div type="Number" className="quantityDiv">{quantity}</div>
                                                    <button className="increment" onClick={() => productQuantityIncrement(item)}>+</button></div>
                                            </div>
                                        </div>
                                        <div className="cartItemActionBtns">
                                            <button onClick={() => { notify("removeFromCart"); removeFromCartCartHandler(item) }} className="cartItemActionBtn" ><i className="fa fa-trash"></i> Remove</button>
                                            {wishList.find((product) => product._id === item._id) ? (<button onClick={() => { notify("removeFromWishlist"); addToWishListHandler(item) }} className="cartItemActionBtn">Remove from Wishlist</button>) : (<button onClick={() => { notify("addToWishlist"); addToWishListHandler(item) }} className="cartItemActionBtn"><i className="fa fa-heart" aria-hidden="true"></i> Move to Wishlist</button>)}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="cartItemsSummaryDetailsDiv">
                        <div className="cartItemsSummaryDiv">
                            <div className="couponDiv">
                                <p>Get 5% off ?</p>
                                <button disabled={isCouponApplied} onClick={() => applyCouponHandler()} className="couponBtn">{!isCouponApplied ? "Apply Coupon":"Applied"}</button>
                            </div>
                            <div className="ItemDetailsandPrice">
                                <div className="ItemDetails">
                                    <p>Price : ({totalItems} items)</p>
                                    <p>Discount</p>
                                    <p>Delivery Charges</p>
                                    <p>Coupon Discount</p>
                                    <p><b>Total Amount</b></p>
                                </div>
                                <div className="ItemPriceDetails">
                                    <p>₹{priceOfAllItems}</p>
                                    <p>₹{totalPriceDiscount}</p>
                                    <p>Free</p>
                                    <p>₹{couponDiscount}</p>
                                    <p><b>₹{totalPrice}</b></p>
                                </div>
                            </div>
                            <div className="checkoutDiv">
                                <p className="discountPercentage">You will save ₹{totalPriceDiscount + couponDiscount} on this order</p>
                                <NavLink to="/checkout"><button className="checkoutActionBtn">Checkout</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>)}

            </div >
        </>
    )
}