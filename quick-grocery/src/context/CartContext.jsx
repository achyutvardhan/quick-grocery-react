import { createContext, useState, useContext } from "react";
import { ProfileContext } from "./ProfileContext";
import { cartFetch } from "../js/cartFetch";
const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const { profile } = useContext(ProfileContext);
  const [cartItem, setCartItem] = useState([]);
  const noOfItems = () => {
    const arr = cartItem?.items || [];
    let sum = 0;
    arr.forEach((ele) => {
      sum += ele.quantity;
    });
    return sum;
  };

  const totalSum = ()=>{
     const arr = cartItem.items || [];
     let sum = 0;
     arr.forEach(ele=>{
      sum += (ele.quantity * ele.price)
    })
    return Math.round(sum);
  }

  const refreshFetch = async () => {
    const res = await cartFetch(profile.id);
    console.log(res)
    setCartItem(res[0]);
    noOfItems();
    totalSum();
    console.log(res[0]);
    console.log("called refreshCart");
  };
  return (
    <CartContext.Provider value={{ cartItem, refreshFetch, noOfItems , totalSum }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
