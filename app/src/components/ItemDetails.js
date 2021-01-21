import React, {useContext} from 'react';
import {Card} from "antd";
import {useParams, useHistory} from 'react-router-dom'


export const ItemDetails = () => {
    const {value, pieces, priority} = useParams();
    return (<div>
        <Card title={value} bordered={false} style={{width: 300, fontSize: '25px'}}>
            <h2>Пріоритет : {priority}</h2>
            <p>Кількість {pieces}шт</p>
        </Card>
    </div>)
}
