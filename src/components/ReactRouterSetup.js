import React from 'react'
import Form from "../pages/Form";
import App from "../App";
import Navbar from "./Navbar"
import Error from "../pages/Error"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


 const ReactRouterSetup = () => {
    return (
        <Router>
          <Navbar />
          <Switch>
           <Route exact path='/'>
            <App />
           </Route>
           <Route path='/interested'>
            <Form />
           </Route>
           <Route exact path='*'>
            <Error />
           </Route>
           </Switch>
       </Router>
    )
}
 
export default ReactRouterSetup
