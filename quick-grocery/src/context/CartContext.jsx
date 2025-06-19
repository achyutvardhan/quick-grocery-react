import { createContext, useState  , useContext} from "react";
import { ProfileContext } from "./ProfileContext";
import { cartFetch } from "../js/cartFetch";
const CartContext = createContext([]);

const CartProvider = ({children})=>{
    const [cartItem , setCartItem] = useState([])
    const {profile} = useContext(ProfileContext)
    const refreshFetch = async()=>{
        const res = await cartFetch(profile.id);
        setCartItem(res.data);
        console.log(res)
        console.log("called refreshCart")
    }
    return(
        <CartContext.Provider value={{cartItem , refreshFetch}}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext ,CartProvider}