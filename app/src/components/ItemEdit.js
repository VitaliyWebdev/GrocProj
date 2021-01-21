import React, {useContext} from 'react';
import {Context} from "../context";
import '../styles.css'

export const EditField = ({item}) => {
    const {updateItems} = useContext(Context);

    const changeValue = (event) => {
        event.preventDefault();
        const inputValue = event.target[0].value
        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));

        for (const element of itemFromStorage) {
            if (item.id === element.id) {
                element.value = inputValue;
            }
        }
        updateItems(itemFromStorage)
    }
    return (
        <div className="edit-area">
            <form action="" onSubmit={changeValue} className="edit-form">
                <input type="text" className="edit-input"/>
                <button className="edit-field-btn">change</button>
            </form>

        </div>
    );
}
