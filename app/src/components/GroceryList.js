import React, {useState, useContext} from 'react'
import '../styles.css'
import ItemEdit from "./ItemEdit";
import {Context} from "../context";

export default function TodoItem({item, value}) {
    let {updateItems} = useContext(Context);
    const [state, setState] = useState(false);
    const [field, setField] = useState('edit');

    const changeState = () => {
        if (state) {
            setState(false);
            setField('edit')


        } else {
            setState(true);
            setField('save')
        }
    }
    const plusItem = (event) => {
        event.preventDefault();

        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));

        for (const element of itemFromStorage) {
            if (item.id === element.id) {
                element.count = element.count + 1;
            }
        }
        updateItems(itemFromStorage)
    }
    const minusItem = (event) => {
        event.preventDefault();
        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));
        for (const element of itemFromStorage) {
            if (item.id === element.id) {
                element.count = element.count - 1;
            }
        }
        updateItems(itemFromStorage)
    }
    const deleteItem = () => {
        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));
        const newArray = itemFromStorage.filter(todo => todo.id !== item.id)
        updateItems(newArray)
    }

    return (
        <div className="list-box">

            <div className="item">
                <span>{value}-{item.count}шт</span>
                <button className='edit-btn m-l5' onClick={changeState}>{field}</button>
                <button className="delete-btn m-l5" onClick={deleteItem}>delete</button>
                <button className="plus-item-btn m-l5" onClick={plusItem}>+1</button>
                <button className="minus-item-btn m-l5" onClick={minusItem}>-1</button>
                {state && <ItemEdit item={item}/>}

            </div>
        </div>
    );
}
