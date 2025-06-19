import axios from "axios"

export const productFetch = async()=>{
    const res = await axios.get("http://localhost:3000/product")
    // console.log(res.data);
    return res.data
}


