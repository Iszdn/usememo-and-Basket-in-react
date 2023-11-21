import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Products = () => {

    const [product, setProduct] = useState("")
    const [isLoading, setIsLoading] = useState(true);
   
        const baseUrl = "http://localhost:3000/products"
    
        const datalar = async () => {
            try {
                const response = await axios(baseUrl)

                setProduct(response.data);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
    


useEffect(() => {
    datalar()

}, [])


  return ( isLoading ? ( <p><i class="fa-solid fa-spinner fa-spin fa-spin-reverse"></i></p> ) :
    <div>
<table>
    <thead>
        <tr>
            <th>Product ID</th>
            <th>Product name</th>
            <th>button</th>
        </tr>
    </thead>
<tbody>
   { 
   product && product.map((item)=>(
    <tr>
        <td>{item.id}</td>
        <td>{item.product}</td>
        <td><button>add</button></td>
    </tr>
   ))}
</tbody>

</table>
    </div>
  )
}

export default Products