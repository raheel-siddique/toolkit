import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {id:1, itemName:"T-shirts", itemQty:1, itemPrice:1000},
    {id:2, itemName:"shirt", itemQty:1, itemPrice:2000},
    {id:3, itemName:"pent", itemQty:1, itemPrice:3000}
  
  
  ],
  cartItemQtyTtl:0
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addItemToCart: (state,action) => {


        let productsAll=[...state.products]

        const checkExistingItem=productsAll.findIndex((items)=>{
          return items.itemName===action.payload.itemName
        })

         if(checkExistingItem===-1){
          productsAll.push(action.payload)
          state.products=productsAll;
         }
         else{
          productsAll[checkExistingItem].itemQty=productsAll[checkExistingItem].itemQty+action.payload.itemQty
          state.products=productsAll
         }

    },
    clearCart: (state) => {
   
       state.products=[]

  },
  decQty: (state, action) => {
   
  const allProducts=[...state.products];
  allProducts.map((items, index)=>{
      if(items.id===action.payload){
    if(items.itemQty>1){

        items.itemQty=items.itemQty-1;
       }
       else{
        allProducts.splice(index, 1)
      }
    }
    
  })
  state.products= allProducts

},
incQty: (state, action) => {
   
  const allProducts=[...state.products];
  allProducts.map((items)=>{
    if(items.id===action.payload){
     items.itemQty=items.itemQty+1;
    }
  })
  state.products= allProducts

},

removeItem: (state, action) => {
    let allProducts=[...state.products];
    const updatedProducts=allProducts.filter((items)=>{
      return items.id!==action.payload
    })
    state.products=updatedProducts
   
},
calcCartItemQtyTtl: (state, action) => {
  let allProducts=[...state.products];
  const qtyTotal=allProducts.map((items)=>{
    return items.itemQty;
  }).reduce((acc, currVal)=>{
    return acc+currVal
  },0)
  
  state.cartItemQtyTtl=qtyTotal

   
},


  
   
  
  },
})

// Action creators are generated for each case reducer function
export const {  addItemToCart,clearCart,decQty, incQty, removeItem, calcCartItemQtyTtl} = productSlice.actions

export default productSlice.reducer