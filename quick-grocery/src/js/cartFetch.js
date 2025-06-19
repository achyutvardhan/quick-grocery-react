import axios from "axios";

export const cartFetch = async (userId) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/cartItems?userId=${userId}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postFromViewItem = async (userId, data) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/cartItems?userId=${userId}`
    );
    if (!res.data[0]) {
      const response = await axios.post("http://localhost:3000/cartItems", {
        userId: userId,
        items: [data],
      });
      return response.data;
    } else {
      const items = res?.data[0].items;
      const found = items.find((x) => x.name == data.name);
      if (found) {
        found.quantity += data.quantity;
        await axios.patch(`http://localhost:3000/cartItems/${res.data[0].id}`, {
          items: items,
        });
        console.log("quantity added")
        return {items}
      } else {
        const items = res?.data[0].items;
        const newItems = [...items, data];
        await axios.patch(`http://localhost:3000/cartItems/${res.data[0].id}`, {
          items: newItems,
        });
        console.log("item added")
        return {items}
      }
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};


export const postFromAddToCart = async(data, userId)=>{
    try {
        const response = await axios.get(`http://localhost:3000/cartItems?userId=${userId}`);
        const items = response?.data[0].items;
        // console.log(data)
        const found = items.find(x=> x.name  == data.name);
        if(!found) console.log("server Error !! product not found");
        found.quantity = data.quantity;
        await axios.patch( `http://localhost:3000/cartItems/${response.data[0].id}`,{
            items : items
        })
        return {items}
    } catch (error) {
        console.log(error)
        return false;
    }
}