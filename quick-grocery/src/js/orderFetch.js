import axios from "axios";

// Helper to generate a unique order group id
const generateOrderGroupId = () => {
  return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

const postFromCart = async (data) => {
  try {
    // Fetch existing orders for the user
    const res = await axios.get(
      `http://localhost:3000/orders?userId=${data.userId}`
    );
    const orderGroup = {
      id: generateOrderGroupId(),
      products: data.items.map((item) => ({
        ...item,
        quantity: item.quantity || item.qty || 1,
      })),
      status: "shipped",
      date: new Date(),
      total: data.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || item.qty || 1),
        0
      ),
    };
    if (!res.data[0]) {
      const userData = {
        userId: data.userId,
        order: [orderGroup], 
      };
      const response = await axios.post(
        `http://localhost:3000/orders`,
        userData
      );
      return response;
    } else {
      const userOrder = res.data[0];
      const orderArr = userOrder.order || [];
      const newOrderArr = [...orderArr, orderGroup];
      const response = await axios.patch(
        `http://localhost:3000/orders/${userOrder.id}`,
        {
          order: newOrderArr,
        }
      );
      return response;
    }
  } catch (error) {
    return false;
  }
};


const cancelOrderFromOrders = async (order)=>{
  try {
    const findUser = await axios.get(`http://localhost:3000/orders?userId=${order?.userId}`);
    if(!findUser) return {status : false , message : "User Not found"};
    const orders = findUser?.data[0]?.order;
    console.log(orders)

    const currentOrderToCancel = orders?.filter((x) => x.id !== order.id)
    console.log(currentOrderToCancel)
    const postRemainOrder = await axios.patch(`http://localhost:3000/orders/${findUser?.data[0].id}` , {
      order : currentOrderToCancel
    })
   return {status : true , postRemainOrder};
  } catch (error) {
    return{status: false};
  }
}

export { postFromCart , cancelOrderFromOrders };
