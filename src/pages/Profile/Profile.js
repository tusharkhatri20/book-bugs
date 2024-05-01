// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import moment from 'moment';
import { NavigationBar } from "../../components/NavigationBar"
import "./Profile.css"
import { useContext, useState } from 'react';
import { UserDetailsContext } from '../../contexts/UserDetailsContext';
import { AddressForm } from '../../components/AddressForm/AddressForm';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContext } from '../../contexts/ToastContext';
import { CartContext } from '../../contexts/CartContext';
import { WishListContext } from '../../contexts/WishListContext';
import { ProductsContext } from '../../contexts/ProductsContext';



export const Profile = () => {

    const { setIsAddressFormOpen, isAddressFormOpen, addresses, currentUser, updateAddressFormHandler, setFillData, emptyFormData, deleteAddressFormHandler } = useContext(UserDetailsContext)
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
    const {setCart} = useContext(CartContext)
    const {setWishList} = useContext(WishListContext)
    const {notify} = useContext(ToastContext)
    const {clearFilters} = useContext(ProductsContext)
    const [shouldShowTab, setShouldShowTab] = useState("profile");

    const navigate = useNavigate()

    const toogleTab = (tab) => {
        setShouldShowTab(shouldShowTab => shouldShowTab = tab)
    }

    return (
        <>

            <NavigationBar />

            <div className="profileBox">
                <div className="profileHeading">
                    <h2>My Account</h2>
                </div>
                {!isLoggedIn ? <div className="userNotLoggedIn">
                   <h3> User Not Logged In. Please 
                    <NavLink className="newUserLoginLink" to="/login"> Login</NavLink></h3>
                </div> : <div className="userLoggedIn">
                    <div className="userDetailsDiv">
                        <div className="userDetailsHeaderBtnsDiv">
                            <div onClick={() => toogleTab("profile")} className={shouldShowTab === "profile" ? "headerBtn-active" : "headerBtn"}>
                                <h3 >Profile</h3>
                            </div>
                            <div onClick={() => toogleTab("address")} className={shouldShowTab === "address" ? "headerBtn-active" : "headerBtn"}>
                                <h3 >Addresses</h3>
                            </div>
                        </div>
                        {shouldShowTab === "address" ? (<div className="userAddressDiv">
                            {
                                addresses.map((item) => {
                                    const { id, firstName, lastName, street, district, state, pinCode, phone } = item;
                                    return (
                                        <div key={id} className="addressDetails">
                                            <div className="addressDetailsRow">
                                                <h3>{firstName + " " + lastName} </h3>
                                                <p>{street}</p>
                                                <p>{district}, {state}</p>
                                                <p>Pin: {pinCode}</p>
                                                <p>Phone: {phone}</p>
                                            </div>
                                            <div className="addressActionBtns">
                                                <button onClick={() => updateAddressFormHandler(item)} className="editAddressBtn"> <i className="fa fa-edit"></i> Edit</button>
                                                <button onClick={() => {deleteAddressFormHandler(id); notify("addressDeleted")}} className="deleteAddressBtn"><i className="fa fa-trash"></i> Delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="addNewAddressBtnDiv">
                                <button onClick={() => { setIsAddressFormOpen(true); setFillData(emptyFormData) }} className="addnewAddressBtn"><i className="fa fa-plus"></i> Add New Address</button>
                            </div>
                        </div>) :
                            (<div className="profileDiv">
                                <div className="profileDetails">
                                    <div className="profileDetailsLeftColumn">
                                        <h3>Name: </h3>
                                        <h3>Email: </h3>
                                        <h3>SignUp Date: </h3>
                                    </div>
                                    <div className="profileDetailsRightColumn">
                                        <h3>{currentUser.firstName + " " + currentUser.lastName}</h3>
                                        <h3>{currentUser.email}</h3>
                                        {/* <h3>{moment(Date.now()).format("MMM Do YY")}</h3> */}
                                        <h3>{moment(currentUser.createdAt).format("MMM Do YY")}</h3>
                                    </div>
                                </div>
                                <div className="profileActionBtns">
                                    <button onClick={()=>{notify("userLoggedOut"); clearFilters() ;setIsLoggedIn(false);
      setCart([]);setWishList([]); navigate("/")}} className="logoutBtn"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
                                </div>
                            </div>)}
                    </div>
                </div>}
                {isAddressFormOpen && <AddressForm />}
            </div>
        </>
    )
}