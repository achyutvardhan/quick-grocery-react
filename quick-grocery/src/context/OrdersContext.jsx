import axios from "axios";
import { createContext, useContext, useState } from "react";
import { ProfileContext } from "./ProfileContext";
const OrdersContext = createContext([]);

const OrdersProvider = ({children})=>{
    const [orders , setOrders] = useState([]);
    const {profile} = useContext(ProfileContext);
    const fetchOrders = async()=>{
        const res  = await axios.get(`http://localhost:3000/orders?userId=${profile.id}`);
        setOrders(res.data);
    }
    const noOfOrders = () => {
        // console.log(orders?.[0]?.order?.length)
        return orders?.[0]?.order?.length || 0;
    }
    const refreshOrders = ()=>{
        fetchOrders();
        noOfOrders();
    }
    return(
        <OrdersContext.Provider value={{orders , refreshOrders , noOfOrders}}>
            {children}
        </OrdersContext.Provider>
    )
}

export {OrdersContext , OrdersProvider}