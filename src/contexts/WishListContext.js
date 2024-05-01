import { createContext, useState } from "react"


export const WishListContext = createContext();
export const WishListProvider = ({ children }) => {

    const [wishList, setWishList] = useState([]);

    const addToWishListHandler = (product) => {
        wishList.find((item) => item._id === product._id) ? setWishList([...wishList].filter((item) => item._id !== product._id)) : setWishList([...wishList, product]);


    }



    return (<WishListContext.Provider value={{ wishList,setWishList, addToWishListHandler }}>
        {children}
    </WishListContext.Provider>)
}