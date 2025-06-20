import React , {useContext, useEffect} from 'react'
import { CartContext } from '../context/CartContext'
import HeroBanner from '../Home/HeroBanner'
import TopCategory from '../Home/TopCategory'
import { AuthContext } from '../context/AuthContext'
import YouMayAlsoLike from '../Home/YouMayAlsoLike'
import OurProductSection from '../Home/OurProductSection'
import AppPromotionSection from '../Home/AppPromotionSection'
import FoodBlogSection from '../Home/FoodBlogSection'
import { OrdersContext } from '../context/OrdersContext'
// import OurProductsSection from  '../Home/OurProductSection'
// import FoodBlogSection from '../Home/FoodBlogSection'

export default function Home() {
  const {refreshFetch} = useContext(CartContext);
  const {loggedIn} = useContext(AuthContext)
  const {refreshOrders} = useContext(OrdersContext)
  useEffect(()=>{
   {loggedIn && refreshFetch() && refreshOrders()}
  },[])
  return (
    <>
    <HeroBanner/>
    <TopCategory/>
    <OurProductSection/>
     <AppPromotionSection/>
     <FoodBlogSection/>
    <YouMayAlsoLike/>

   
   </>
  )
}
