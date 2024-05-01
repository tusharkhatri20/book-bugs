import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import "./Products.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { NavigationBar } from "../../components/NavigationBar"
import { CartContext } from "../../contexts/CartContext"
import { WishListContext } from "../../contexts/WishListContext"
import { ToastContext } from "../../contexts/ToastContext"
import { AuthContext } from "../../contexts/AuthContext"
import { Loader } from "../../components/Loader/Loader"

export const Products = () => {

      
        const [toggleFilterStyle, setToggleFilterStyle] = useState(false);

        const { myFilters, sortFiltered, clearFilters, priceSliderHandler, checkboxHandler, radioHandler, sortHandler } = useContext(ProductsContext)
        const { cart, addToCartHandler } = useContext(CartContext)
        const { wishList, addToWishListHandler } = useContext(WishListContext);
        const {isLoggedIn} = useContext(AuthContext)
        const { notify } = useContext(ToastContext)

        const location = useLocation();
        const navigate = useNavigate();
        const {
            priceFilter,
            categoryFilter,
            ratingFilter,
            sortFilter } = myFilters
            const {isLoading, setIsLoading} = useContext(ProductsContext)
            useEffect(() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
          
            }, [setIsLoading]);



        return (
            <>
              {isLoading && <Loader/>}
                <div className="main">
                    <NavigationBar />
                    <div className="contentAndFilterDiv">
                        <div className={!toggleFilterStyle ? "filterDiv" :"filterDiv showFilterDivSm"}>
                            <div className="clearFilter">
                                <h3>Filters</h3>
                                <button className="clearFilterBtn" onClick={clearFilters}>Clear</button>
                            </div>
                        
                            <div className="price-rangeDiv">
                            <h3>Price : {priceFilter}</h3>
                            <div className="price-range">
                                <p>100</p>
                                <p>500</p>
                                <p>1000</p>
                            </div>
                            <div className="SliderFilterDiv">
                                <label><input onChange={(e) => priceSliderHandler(e.target.value)} className="slider" type="range" min="100" max="1000" value={priceFilter} /></label>
                            </div>
                            </div>
                           
                          
                            <div className="CheckBoxFilterDiv">
                                <h3>Category</h3>
                                <label className="checkbox"><input onChange={(e) => checkboxHandler(e.target.value)} checked={categoryFilter.includes("Fiction")} value="Fiction" type="checkbox" />Fiction</label>
                                <label className="checkbox"><input onChange={(e) => checkboxHandler(e.target.value)} checked={categoryFilter.includes("Non Fiction")} value="Non Fiction" type="checkbox" />Non-Fiction</label>
                                <label className="checkbox"><input onChange={(e) => checkboxHandler(e.target.value)} checked={categoryFilter.includes("Self Help")} value="Self Help" type="checkbox" />Self Help</label>
                            </div>
                           
                            <div className="radioFilterDiv">
                            <h3>Rating</h3>
                                <label className="radio"><input onChange={(e) => radioHandler(e.target.value)} checked={ratingFilter === 1} type="radio" name="radio" value="1" />1 star and above</label>
                                <label className="radio"><input onChange={(e) => radioHandler(e.target.value)} checked={ratingFilter === 2} type="radio" name="radio" value="2" />2 star and above</label>
                                <label className="radio"><input onChange={(e) => radioHandler(e.target.value)} checked={ratingFilter === 3} type="radio" name="radio" value="3" />3 star and above</label>
                                <label className="radio"><input onChange={(e) => radioHandler(e.target.value)} checked={ratingFilter === 4} type="radio" name="radio" value="4" />4 star and above</label>
                            </div>
                            
                            <div className="radioFilterDiv">
                            <h3>Sort By</h3>
                                <label className="radio1"><input onChange={(e) => sortHandler(e.target.value)} checked={sortFilter === "lToH"} type="radio" name="radio1" value="lToH" />Price - Low To High</label>
                                <label className="radio1"><input onChange={(e) => sortHandler(e.target.value)} checked={sortFilter === "hToL"} type="radio" name="radio1" value="hToL" />Price - High To Low</label>
                            </div>
                        </div>
                        <div className="showingResultsDiv">
                            <div className="showingResultsHeader">
                                <p>Showing All Products ({sortFiltered.length})</p>
                                <p className="filterIcon" onClick={()=>setToggleFilterStyle(!toggleFilterStyle)}role= "button" ><i className="fa fa-filter" aria-hidden="true"></i></p>
                            </div>
                            <div className="productsDiv">
                            {
                                sortFiltered.map((product) => {
                                    const { _id, name, img, author, price, originalPrice, rating } = product;
                                    return (
                                        <div key={_id} className="productDiv">

                                            <NavLink to={`/products/${_id}`}><div className="card-img">
                                                <img className="bookImg" src={`${img}`} alt="book" />
                                            </div></NavLink>
                                            {wishList.find((item) => item._id === product._id) ? (<span onClick={() => { notify("removeFromWishlist"); addToWishListHandler(product) }} role="button" className="wishlist-icon-filled" disabled=""><i className="fa fa-heart" aria-hidden="true"></i></span>) :
                                                (<span onClick={() => { notify("addToWishlist"); addToWishListHandler(product) }} role="button" className="wishlist-icon" disabled=""><i className="fa fa-heart" aria-hidden="true"></i></span>)}
                                            <div className="card-details">
                                                <div className="card-title-rating">
                                                    <div className="card-title">
                                                        <p className="card-title-header"><NavLink to={`/products/${_id}`}>{name}</NavLink> </p>
                                                        <p>{author}</p>
                                                    </div>
                                                    <div className="card-rating">
                                                        <p><small>{rating}&#9733;</small></p>
                                                    </div>
                                                </div>
                                                <div className="card-price">
                                                    <p><b>₹{price}</b> <s> ₹{originalPrice}</s> <small className="discountPercentage">{Math.round(((originalPrice - price) / originalPrice) * 100)}% off</small> </p>
                                                </div>
                                                {cart.find((item) => item._id === product._id) ? <div className="addToCartBtn" >
                                                  <button onClick={()=>navigate("/cart")} className="goToCart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Go to Cart </button>
                                                </div> : <div className="addToCartBtn">
                                                    <button onClick={isLoggedIn ? () => { notify("addToCart"); addToCartHandler(product) } : () => { notify("pleaseLogin");navigate("/login", {state: {from:location}} ) }} className="addToCart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button>
                                                </div>}


                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        </div>
                    </div>
                </div >

            </>
        )
    }