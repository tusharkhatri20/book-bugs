import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavigationBar } from "../../components/NavigationBar"
import { WishListContext } from "../../contexts/WishListContext"
import "./WishList.css"
import { CartContext } from "../../contexts/CartContext";
import { ToastContext } from "../../contexts/ToastContext";
export const WishList = () => {

    const { cart, addToCartHandler } = useContext(CartContext);
    const { wishList, addToWishListHandler } = useContext(WishListContext);
    const { notify } = useContext(ToastContext);

    return (
        <>

            <NavigationBar />

            <div className="wishListBox">
                <div className="wishListHeading">
                    <h2>My WishList({wishList.length})</h2>
                </div>
                {wishList.length === 0 ? (<div className="EmptyWishList"><h3>There are no books in the WishList</h3></div>) : (<div className="wishList">
                    <div className="wishListItemsDiv">
                        {
                            wishList.map((item) => {
                                const { _id, name, img, author, price, originalPrice, rating } = item;
                                return (
                                    <div key={_id} className="wishListItem">
                                        <div className="wishListItemDetailsDiv">
                                            <NavLink to={`/products/${_id}`}> <div className="wishListItmImgDiv"><img src={`${img}`} alt="wishListItmImg" className="wishListItmImg" width="150px" height="250px" /></div></NavLink>
                                            <div className="wishListItemDetails">
                                                <h4><NavLink to={`/products/${_id}`}>{name}</NavLink></h4>
                                                <h5>Author: <b>{author}</b></h5>
                                                <h5>Rating: <b>{rating}</b></h5>
                                                <h4><b>₹{price}</b> <s> ₹{originalPrice}</s> <small className="discountPercentage">{Math.round(((originalPrice - price) / originalPrice) * 100)}% off</small></h4>
                                            </div>
                                        </div>
                                        <div className="wishListItemActionBtns">
                                            {cart.find((product) => product._id === item._id) ?
                                                <button className="wishListItemActionBtn"><NavLink to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Go to Cart </NavLink></button>
                                                :
                                                <button onClick={() => { notify("addToCart"); addToCartHandler(item) }} className="wishListItemActionBtn"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button>
                                            }

                                            <button onClick={() => { notify("removeFromWishlist"); addToWishListHandler(item) }} className="wishListItemActionBtn"><i className="fa fa-trash"></i> Remove</button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>)}

            </div>
        </>
    )
}