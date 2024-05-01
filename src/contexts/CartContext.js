import { createContext, useState } from "react"


export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [isCouponApplied, setIsCouponApplied] = useState(false);


    const addToCartHandler = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCartCartHandler = (product) => {
        setCart([...cart].filter((item) => item !== product))
    }

    const applyCouponHandler = () => {
        setIsCouponApplied(isCouponApplied => isCouponApplied = true);
    }

    const productQuantityIncrement = (product) => {
        setCart([...cart].map((item) =>
            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }
    const productQuantityDecrement = (product) => {
        const cartWithDecrementedQuantityOfProducts = [...cart].map((item) =>
            item._id === product._id ? { ...item, quantity: item.quantity - 1 } : item
        )
        setCart(cartWithDecrementedQuantityOfProducts)
    }


    let { priceOfAllItems, couponDiscount, totalPriceDiscount, totalPrice } = cart.reduce((acc, { originalPrice, price, quantity }) => {
        acc.priceOfAllItems += originalPrice * quantity;
        acc.totalPriceDiscount += (originalPrice * quantity - price * quantity);
        acc.couponDiscount += isCouponApplied ? Math.round(price * quantity * 0.05) : 0;
        acc.totalPrice += isCouponApplied ? Math.round(price * quantity * 0.95) : price * quantity;
        return acc;
    }, {
        priceOfAllItems: 0,
        totalPriceDiscount: 0,
        couponDiscount: 0,
        totalPrice: 0
    })

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

    return (<CartContext.Provider value={{ cart, totalItems, addToCartHandler, productQuantityIncrement, productQuantityDecrement, removeFromCartCartHandler, priceOfAllItems, totalPriceDiscount, couponDiscount, totalPrice, isCouponApplied, applyCouponHandler ,setCart}}>
        {children}
    </CartContext.Provider>)
}