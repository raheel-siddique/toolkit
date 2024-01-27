import { useState } from 'react'
import { Provider } from 'react-redux';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
const [cart, setCart]=useState([
  {id:1, itemName:"T-shirts", itemQty:1, itemPrice:1000},
  {id:2, itemName:"shirt", itemQty:1, itemPrice:2000},
  {id:3, itemName:"pent", itemQty:1, itemPrice:3000}


]);


const addToCart=(id, itemName, itemQty, itemPrice)=>{

  // check cart item already exists in a cart or not


  let myCart=[...cart];
  let existCartItem=myCart.findIndex((items)=>{
    return items.itemName===itemName
  })

  console.log('index:::',existCartItem)



  if(existCartItem===-1){
    myCart.push({id, itemName, itemQty, itemPrice})
    setCart(myCart)
  }
  else{
    myCart[existCartItem].itemQty=myCart[existCartItem].itemQty+itemQty
    setCart(myCart)
  }

  

}


const clearCart=()=>{
  setCart([])
}
const decrementQty=(id)=>{
const myCart=[...cart];

myCart.map((items, index)=>{
  if(items.id===id){
    if(items.itemQty>1){
      return items.itemQty=items.itemQty-1;

    }else{
      myCart.splice(index,1)
    }
  }
})
setCart(myCart)

}

const incrementQty=(id)=>{

  const myCart=[...cart];

  
  myCart.map((items)=>{
    if(items.id===id){
      return items.itemQty=items.itemQty+1;
    }
  })
  setCart(myCart)
  
 
}

const deleteCartItem=(id)=>{
  let myCart=[...cart];
  const updatedCart=myCart.filter((items)=>{
    return items.id!==id
  })
  setCart(updatedCart)
   
}
  return <> 
  <Navbar cart={cart} clearCart={clearCart} decrementQty={decrementQty} incrementQty={incrementQty} deleteCartItem={deleteCartItem} />
  <Component addToCart={addToCart} {...pageProps} /> 
   <Footer />
  </>
}

export default MyApp
