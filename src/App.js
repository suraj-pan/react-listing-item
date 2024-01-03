import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm'
import { useState } from 'react';

function App() {
  const [lists,setLists]= useState([]);

  const ListHandler =(item)=>{
  setLists([...lists,item])   
  }

  console.log(lists)

  const deleteHandler =(id)=>{
      const updatedList = lists.filter(product=>product.id !== id)
      setLists(updatedList)
  }

  return (
    <div className="App">
    <ExpenseForm onChangeList={ListHandler} />
    <div>
     
        <h2>Food Item:</h2>
        <ul>
          {lists.filter((list=>list.category === "Food")).map((product)=>(
           <div key={product.id}>
           <li >{product.price}-{product.category}-{product.name}</li>
            <button  onClick={()=>deleteHandler(product.id)}>Delete</button>
           </div>
          ))}
        </ul>
        <h2>Electronic Item:</h2>
        <ul>
          {lists.filter((list=>list.category === "Electronic")).map((product)=>(
           <div key={product.id}>
           <li   >{product.price}-{product.category}-{product.name}</li>
            <button onClick={()=>deleteHandler(product.id)} >Delete</button>
           </div>
          ))}
        </ul>
        <h2>Skincare Item:</h2>
        <ul>
          {lists.filter((list=>list.category === "Skincare")).map((product)=>(
           <div key={product.id}>
           <li  >{product.price}-{product.category}-{product.name}</li>
            <button onClick={()=>deleteHandler(product.id)} >Delete</button>
           </div>
          ))}
        </ul>

    


    </div>
    
    </div>
  );
}

export default App;
