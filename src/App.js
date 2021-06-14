import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import ToDoList from './ToDoList';
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const[items, setIteam]= useState([]);

  const itemEvent = (event)=> {
    setInputList(event.target.value);
  };

  const listOfItems = ()=>{
    setIteam((oldItem)=>{
      return [...oldItem,inputList];
    });
    setInputList("");
  };
  
  const deleteItems = (id)=>{
    setIteam((oldItem)=>{
      return oldItem.filter((arrEle,index)=>{
        return index !== id;
      })
    })
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDos List</h1>
        <br />
        <input type="text" placeholder="Add Iteam"
        value={inputList} onChange={itemEvent} />
        <button onClick={listOfItems}><AddIcon /></button>

        <ol>
          {/* <li> {inputList} </li> */}

  {/* map method contents four attributes in it
  1)current value 2)current values index
  3)array which are dealing with 4)this 
  we don`t have to wary about 4th on 
  we requird first 3*/}
          {
            items.map((iteamval, indexm) =>{
            return <ToDoList 
            key={indexm} 
            id={indexm}
            text = {iteamval}
            onSelect= {deleteItems}
             />;
            })
          }
        </ol>
      </div>
    </div>
  );
};

export default App;
