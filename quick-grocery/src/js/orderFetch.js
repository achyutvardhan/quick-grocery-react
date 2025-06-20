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
      // No order exists, create a new one (let backend generate the id)
      const userData = {
        userId: data.userId,
        order: [orderGroup], // 'order' is an array of order groups
      };
      const response = await axios.post(
        `http://localhost:3000/orders`,
        userData
      );
      return response;
    } else {
      // Order exists, add new order group to 'order' array
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

export { postFromCart };
