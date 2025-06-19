import axios from "axios"

export const cartFetch = async(userId)=>{
    const res = await axios.get(`http://localhost:3000/cartItems?userId=${userId}`)
    console.log(res.data);
    return res.data
}



