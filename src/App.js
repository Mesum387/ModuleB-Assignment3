import React from "react";
import "./App.css";
import { useState } from "react";

const App = ()=>{
const [inputData,setinputData]=useState("");
const[Items,setItems]=useState([]);
const addItem=()=>{
  if(!inputData){}else{

    setItems([...Items,inputData]);
    setinputData("");
  }
}
const deleteItem=(id)=>{
console.log(id);
const updatedItems =Items.filter((element,index)=>{
return index!==id;
});
setItems(updatedItems);
}

const deleAll=()=>{
setItems([]);
}

  return(
    <>
    <div className="mynewdiv">
      <input value={inputData} placeholder="Enter Todo" onChange={(e)=>setinputData(e.target.value)} type="text"/>
     <br/> <button onClick={addItem}>Submit</button>
      <button onClick={deleAll}>DeleteAll</button>
    </div>
    <div>
      <ol>
      {
        Items.map((element,index)=>{
          return (
            <>
<li key={index}>{element} <button className="dele" onClick={()=>deleteItem(index)}>Delete</button><button>Edit</button></li></>
          )
        })
      }
      </ol>
      
    </div>
    </>
  )
}
export default App