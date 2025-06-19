import React , {useContext, useEffect} from 'react'
import { CartContext } from '../context/CartContext'
export default function Home() {
  const {refreshFetch} = useContext(CartContext);
  useEffect(()=>{
    refreshFetch();
  },[])
  return (
    <div>
      Home
    </div>
  )
}
