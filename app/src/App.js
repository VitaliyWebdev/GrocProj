import React from 'react'
import CreateForm from "./components/CreateForm";
import './styles.css'
import {Route, Switch} from "react-router-dom";
import {ItemDetails} from "./components/ItemDetails";
import {Uploader} from "./Uploader/Uploader";

export default function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <CreateForm/>
                </Route>
                <Route path="/:value/:pieces/:priority">
                    <ItemDetails/>
                </Route>
            </Switch>

<Uploader/>
        </div>

    );
}
