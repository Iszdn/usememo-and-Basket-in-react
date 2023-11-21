import React from 'react';
 
import './App.css';
import Products from './Components/Products';
// import { useState } from 'react';
// import { useCallback } from 'react';

// const phones=[
//   {name:"Iphone15",price:3000},
//   {name:"Samsung",price:1000},
//   {name:"Xiomi",price:300}
// ]



function App() {
  // const [products] = useState(phones)
  // const [cart,setCart]=useState([])

  // const addToCart=useCallback((product)=>{
  //   setCart((cart)=>[...cart,product])
  // },[])
  // const emptyCart=useCallback(()=>{
  //   setCart([])
  // })

  return (
    <div >
 {/* <Products products={products} addToCart={addToCart}/>
 <Cart cart={cart} emptyCart={emptyCart}/> */}
 <Products></Products>
    </div>
  );
}

export default App;

// const Products=React.memo(({products,addToCart})=>{

//   return(
//     <>
// <h1>all products</h1>
// {products.map(({name,price})=>
// (
//   <Product name={name} price={price} addToCart={addToCart}/>
// )
// )}
//     </>
//   )
// })


// const Cart=React.memo(({cart,emptyCart})=>{
//   return(
//     <>
//     <h1>Carts <button onClick={emptyCart}>clear all</button></h1>
//     {cart.map(({name,price})=>(
//         <Product name={name} price={price} />
//     ))}
//     </>
//   )
// })


// const Product=React.memo(({name,price,addToCart})=>{
//   return(
//     <>
// <h2>{name}</h2>
// <p>{price}</p>
// {addToCart && <button onClick={()=>addToCart({name,price})}>add</button>}
//     </>
//   )
// })