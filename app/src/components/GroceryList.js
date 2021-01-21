import React, {useState, useContext} from 'react'
import '../styles.css'
import {EditField} from "./ItemEdit";
import {Context} from "../context";
import {Card, Button} from 'antd';
import '../styles/style.css'

export default function TodoItem({item, value}) {
    const {updateItems} = useContext(Context);

    const [field, setField] = useState('edit');

    const changeState = () => {
        if (field === 'edit') {
            setField('save')
        } else {
            setField('edit')
        }
    }
    const ChageItemsCountHandler = (event) => {
        event.stopPropagation();
        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));
        let value = event.target.innerText;
        if (value == 1) {

            updateItems(itemFromStorage.map(el => {
                if (item.id === el.id) el.count = el.count + 1;
                return el;
            }))
        } else if (value == -1) {
            updateItems(itemFromStorage.map(el => {
                if (el.id === item.id) el.count = el.count - 1;
                return el;
            }))
        }
    }
    const deleteItem = () => {
        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));
        updateItems(itemFromStorage.filter(todo => todo.id !== item.id))
    }
    return (
        // <Card title="Card title" bordered={false} className="card">
        <div className="list-box">
            <div className="item">
                <span className="">{value}:{item.count}шт</span>
                <Button size="middle" type="primary" onClick={changeState}>{field}</Button>
                <Button size="middle" type="danger" onClick={deleteItem}>delete</Button>
                <Button className="plus-minus-btns" size="small" type="primary"
                        onClick={ChageItemsCountHandler}>+1</Button>
                <Button className="plus-minus-btns" size="small" disabled={item.count === 1} type="danger"
                        onClick={ChageItemsCountHandler}>-1</Button>
                {field === "save" && <EditField item={item}/>}


            </div>

        </div>
// </Card>
    );
}
