import axios from "axios";

//  id: "ORD-1001",
//     date: "2025-06-18",
//     status: "Delivered",
//     total: 42.99,
//     items: [
//       { name: "Banana", qty: 2 },
//       { name: "Milk", qty: 1 },
//     ],
const postFromCart = async (data) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/orders?userId=${data.userId}`
    );
    if (!res.data[0]) {
      const userData = {
        id: `#ORD-${data.id}`,
        userId: data.userId,
        date: new Date(),
        status: "shipped",
        total: data.total,
        items: data.items,
      };
      const response = await axios.post(
        `http://localhost:3000/orders?userId=${data.userId}`,
        { userData }
      );
      return response;
    } else {
      const items = res.data?.[0]?.items;
      const newItem = [...items, ...data.items];
      const response = await axios.post(
        `http://localhost:3000/orders?userId=${data.userId}`,
        {
          items: newItem,
        }
      );
      return response;
    }
  } catch (error) {
    return false;
  }
};

export { postFromCart };
