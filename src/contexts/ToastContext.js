import { createContext } from "react"
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext()
export const ToastProvider = ({ children }) => {

    const notify = (action) => {
        switch (action) {
            case "addToCart":
                return toast.success("Item Added to cart!", { position: "bottom-right", autoClose: 1000 })
            case "removeFromCart":
                return toast.error("Item Removed From cart!", { position: "bottom-right", autoClose: 1000 })
            case "addToWishlist":
                return toast.success("Item Added To Wishlist!", { position: "bottom-right", autoClose: 1000 })
            case "removeFromWishlist":
                return toast.error("Item Removed From Wishlist!", { position: "bottom-right", autoClose: 1000 })
            case "emailPasswordIncorrect":
                return toast.error("Email or Password is incorrect!", { position: "bottom-right", autoClose: 1000 })
            case "userLoggedIn":
                return toast.success("Logged In Successfully!", { position: "bottom-right", autoClose: 1000 })
            case "userLoggedOut":
                return toast.error("Logged Out Successfully!", { position: "bottom-right", autoClose: 1000 })
            case "pleaseLogin":
                return toast.info("Please Login To Continue!", { position: "bottom-right", autoClose: 500 })    
            case "addressUpdated":
                return toast.success("Address Details Updated", { position: "bottom-right", autoClose: 500 })    
            case "addressDeleted":
                return toast.error("Address Details Deleted", { position: "bottom-right", autoClose: 500 })    
            default:
                return toast.error("something went wrong", { position: "bottom-right", autoClose: 500 })
        }
    }


    return (<ToastContext.Provider value={{ notify }}>{children}</ToastContext.Provider>)
}