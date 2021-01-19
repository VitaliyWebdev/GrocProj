import React, {useContext} from 'react';
import {Context} from "../context";

export default function EditField({item}) {
    let {updateItems} = useContext(Context);

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
        <div>
            <form action="" onSubmit={changeValue}>
                <input type="text"/>
                <button>change</button>
            </form>

        </div>
    );
}
