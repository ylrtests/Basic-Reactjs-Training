import React, {Component} from 'react';
import { Route, Switch} from "react-router-dom";
import Usuario from './pages/Usuario';
import Blog from './pages/Blog'


class Routes extends Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" render={()=> <h1 className="text-center">Bienvenido</h1>}/>
                <Route exact path="/usuarios" component={Usuario}/>
                <Route exact path="/blog" component={Blog}/>
            </Switch>
        );
    }

}

export default Routes;