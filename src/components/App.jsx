import React, { useState } from "react";
import Input from "./Input";
import ToDoItem from "./ToDoItem";

function App() {
    const [items, setItems] = useState([]);
    const [inputText, setInputText] = useState("")

    function onChange(event){
        var inputValue = event.target.value;
        setInputText(inputValue);
    }

    function addItem() {
        console.log("I got clicked");
        
        setItems((prevItem) => {
            // console.log(prevItem);
            return [...prevItem, inputText]
        });
        setInputText("");
    }

    function deleteItem(id) {
        setItems((prevItem) => {
            return items.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return(
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>

          <Input inputText={inputText} onChange={onChange} addItem={addItem}/>

          <div>
            <ul>
               {items.map((item, index) => (
                <ToDoItem key={index} id={index} delete={deleteItem} item={item}/>
               ))}
                
            </ul>
          </div>
        </div>
      );
}

export default App;