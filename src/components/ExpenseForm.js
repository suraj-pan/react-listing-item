import React, { useState } from 'react'

const ExpenseForm = (props) => {
  const [id,setId]= useState('')
  const [name,setname]= useState('')
  const [price,setprice]= useState('')
  const [category,setcategory]= useState('')

  const submitHandler =(e)=>{
    e.preventDefault();
    console.log(id,name,price,category)
    const items ={
      id,name,price,category
    }

    props.onChangeList(items)
    window.alert("Product is added to the list");
    setId("");
    setcategory("");
    setprice("");
    setname("");
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
      <div>
            <div>
                <label>Product Id: </label>
                <input value={id} onChange={(e)=>setId(e.target.value)} type='number'/>
            </div>
            <div>
                <label>Product Name: </label>
                <input value={name} onChange={(e)=>setname(e.target.value)} type='text'/>
            </div>
            <div>
                <label>Product price: </label>
                <input value={price} onChange={(e)=>setprice(e.target.value)} type='number'/>
            </div>
            <div>
            <label>Category </label>
              <select value={category} onChange={(e)=>setcategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="Food">Food Item</option>
              <option value="Electronic">Electronic Item</option>
              <option value="Skincare">Skincare Item</option>
              </select>
            </div>
            <button type='submit'>Add Product</button>
      </div>
      </form>
    </div>
  )
}

export default ExpenseForm;
