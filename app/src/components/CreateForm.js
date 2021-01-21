import React, {useEffect, useState} from 'react'
import '../styles.css'
import GroceryList from "./GroceryList";
import {Context} from "../context";
import {Button} from 'antd';


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
    console.log(listItems, 'sssssssssssss');
    return (
        <Context.Provider value={{updateItems, listItems}}>
            <header>
                <div className="description">
                    Here you can add items to list
                </div>
                <input type="text" placeholder="Write product you need" className='add-input' value={myInput}
                       onChange={(e) => {
                           const {target: {value}} = e
                           //const {value} = e.target;
                           setMyInput(value)
                       }}/>
                <span className="priority-text">write down priority:</span>
                <input type="number" className='priority-input' value={priority}
                       onChange={(e) => {
                           const {target: {value}} = e
                           setPriority(value)
                       }}/>

                <Button type="primary" onClick={addItem} style={{margin: 'auto 10px'}}>
                    Add to grocery list
                </Button>
            </header>
            <div>
                {!!listItems && listItems.sort((a, b) => {
                    return b.priority - a.priority
                }).map((item, index, array) => <GroceryList key={index} item={item} value={item.value} flag={item.flag}
                                                            listItems={array}/>)}

            </div>
        </Context.Provider>
    );
}
//зробити сортіровку
