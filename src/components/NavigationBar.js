import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { NavLink, useNavigate } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"
import { WishListContext } from "../contexts/WishListContext"

import "./NavigationBar.css"

export const NavigationBar = () => {
    const { searchText, searchTextHandler, searchClickHandler } = useContext(ProductsContext)
    const { cart } = useContext(CartContext);
    const { wishList } = useContext(WishListContext);
    const navigate = useNavigate();
    const {setIsLoading} = useContext(ProductsContext)

    const loadingHandler = () => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 500)
    }

    return (
        <>
            <div className="navigationDiv">
                <div className="logoDiv">
                    <img src={require('../BBLogo2.png')} width="40px" height="40px" alt="BBlogo" />
                    <NavLink to="/"><h1>BookBugs</h1></NavLink>
                </div>
                <div className="searchBarDiv">
                    <input onChange={(e) => searchTextHandler(e.target.value)} value={searchText} type="text" className="searchbar" placeholder="Search books..." />
                   <button onClick={()=>{searchClickHandler(); navigate("/products"); loadingHandler()}} className="searchbtn"><i className="fa fa-search"></i></button>
                </div>
                <div className="profileDetailsDiv">
                    <p className="navIcon"><NavLink to="/products"><i className="fa fa-compass" aria-hidden="true"></i></NavLink></p>
                    <p className="navIcon"><NavLink to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>({cart.length})</NavLink></p>
                    <p className="navIcon"><NavLink to="/wishList"><i className="fa fa-heart" aria-hidden="true"></i>({wishList.length})</NavLink></p>
                    <p className="navIcon"><NavLink to="/user"><i className="fa fa-user-circle-o"></i></NavLink></p>
                </div>
            </div>
        </>
    )
}