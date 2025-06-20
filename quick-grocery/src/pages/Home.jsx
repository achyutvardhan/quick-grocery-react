import React , {useContext, useEffect} from 'react'
import { CartContext } from '../context/CartContext'
import HeroBanner from '../Home/HeroBanner'
import TopCategory from '../Home/TopCategory'
// import OurProductsSection from  '../Home/OurProductSection'
// import FoodBlogSection from '../Home/FoodBlogSection'

export default function Home() {
  const {refreshFetch} = useContext(CartContext);
  useEffect(()=>{
    refreshFetch();
  },[])
  return (
    <>
    <HeroBanner/>
    <TopCategory/>
   
   </>
  )
}
