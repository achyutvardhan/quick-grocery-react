import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { DataContext } from "../context/DataContext";
import ProductCard from "./ProductCard";
export default function OutletProduct() {
  const { data } = useContext(DataContext);
  const Fruits = data.Fruits || [];
  const Vegetables = data.Vegetables || [];
  const Bakery = data.Bakery || [];
  const Meat = data.Meat || [];
  const Dairy = data.Dairy || [];
  const isLoading = !data.Fruits;
  const All = [
    ...Fruits.slice(0, 2),
    ...Vegetables.slice(0, 2),
    ...Bakery.slice(0, 2),
    ...Meat.slice(0, 1),
    ...Dairy.slice(0, 1),
  ];
  const [category, setCategory] = useState({
    category: "All",
    data: All,
  });
  const currentLocation = useLocation().pathname;
  useEffect(() => {
    const getCategory = () => {
      if (currentLocation.match("/ourProduct/Fruits"))
        setCategory({ data: Fruits, category: "Fruits" });
      else if (currentLocation.match("/ourProduct/Vegetables"))
        setCategory({ data: Vegetables, category: "Vegetables" });
      else if (currentLocation.match("/ourProduct/Bakery"))
        setCategory({ data: Bakery, category: "Bakery" });
      else if (currentLocation.match("/ourProduct/Meat"))
        setCategory({ data: Meat, category: "Meat" });
      else if (currentLocation.match("/ourProduct/Dairy"))
        setCategory({ data: Dairy, category: "Dairy" });
      else setCategory({ data: All, category: "All" });
    };
    getCategory();
  }, [currentLocation]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  //   console.log(currentLocation);
  // console.log(Fruits)
  return (
    <>
      {category.data.map((Data, index) => {
        return <ProductCard data={Data} key={index} ctg={category.category} />;
      })}
    </>
  );
}
