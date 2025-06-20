import axios from "axios";

const postFromCart = async (data) => {
  try {
    // Fetch existing orders for the user
    const res = await axios.get(
      `http://localhost:3000/orders?userId=${data.userId}`
    );
    const group = {
      products: data.items.map((item) => ({
        ...item,
        quantity: item.quantity || item.qty || 1,
      })),
      total: data.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || item.qty || 1),
        0
      ),
    };
    if (!res.data[0]) {
      // No order exists, create a new one (let backend generate the id)
      const userData = {
        userId: data.userId,
        date: new Date(),
        status: "shipped",
        items: [group], // items is an array of groups
      };
      const response = await axios.post(
        `http://localhost:3000/orders`,
        userData
      );
      return response;
    } else {
      // Order exists, add new group to items
      const order = res.data[0];
      const items = order.items || [];
      const newItems = [...items, group];
      const response = await axios.patch(
        `http://localhost:3000/orders/${order.id}`,
        {
          items: newItems,
        }
      );
      return response;
    }
  } catch (error) {
    return false;
  }
};

export { postFromCart };
