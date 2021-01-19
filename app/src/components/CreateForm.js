import React, {useEffect, useState} from 'react'
import '../styles.css'
import GroceryList from "./GroceryList";
import {Context} from "../context";

export default function TodosCreateForm() {
    const [listItems, setListItems] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [countId, setCountId] = useState(0);
    const [myInput, setMyInput] = useState('');
    const [priority, setPriority] = useState(0);

    const addItem = () => {
        setCountId(count => count + 1)
        setListItems([...listItems, {
            value: myInput,
            id: countId,
            flag: true,
            count: 1,
            priority: priority
        }])
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(listItems));
    }, [listItems]);

    const updateItems = (updatedItems) => {
        localStorage.setItem("todos", JSON.stringify(updatedItems));
        setListItems(updatedItems);
    };
    return (
        <Context.Provider value={{updateItems, listItems}}>
            <div>
                <input type="text" placeholder="write product you need" className='add-input' value={myInput}
                       onChange={(e) => {
                           const {target: {value}} = e
                           setMyInput(value)
                       }}/>
                <span>write down priority:</span>
                <input type="number" className='priority-input' value={priority}
                       onChange={(e) => {
                           const {target: {value}} = e
                           setPriority(value)
                       }}/>

                <button onClick={() => addItem()}>
                    Add to grocery list
                </button>

                {!!listItems && listItems.map((item, index, array) => <GroceryList key={index} item={item}
                                                                                   value={item.value} flag={item.flag}
                                                                                   listItems={array}/>)}
            </div>
        </Context.Provider>
    );
}
