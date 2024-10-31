import { useEffect, useState } from 'react'
import './App.css'
import Category from './category'
import axios from 'axios';

function App() {
  let[catagares,setcatagares]=useState([])
  let [product,setproduct]=useState([])
  let [catName,setCatName]=useState('')

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
      console.log(finalRes)
      
      setcatagares(finalRes)
      
    })
  }
  let getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finlaRes)=>{
      setproduct(finlaRes.products)
    })
  }
  useEffect(()=>{
    getCategory();
    getProduct();
    
  },[])
  useEffect(()=>{
    if(catName!==''){
      console.log(catName)
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((res)=>res.data)
      .then((finalRes)=>{
        
        console.log(finalRes.products)
        setproduct(finalRes.products)
      })
    }  
  },[catName])

  let pItems = product.map((products,index)=>{
    
    return(
        
        <ProductItem key={index} pData={products}/>     
    )
  })

  return (
    <>
        <h1 className='heading'>Products</h1>
        
        <div className="main">
          <div className="category">
            <Category catagares={catagares} setCatName={setCatName}/>
          </div>
          <div className="product">
            
            {
              product.length>=1?
              pItems
              :
              <h1>No Data Found</h1>
            } 

    
          </div>  
        </div>
        
    </>
  )
}

export default App

function ProductItem ({pData}){
  return (
    <div className="product-info">
      <img src={pData.thumbnail} className='image' />
      <h2>{pData.title}</h2>
      <h3>{pData.price}$</h3>
    </div>
  )
}
