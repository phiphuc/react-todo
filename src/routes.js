import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home  from './pages/Home/Home'
const Layout = () =>(
    <Switch>
        <Route exact path="/" component={ Home }  />
    </Switch>
)

export default Layout;