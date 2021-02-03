import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion'
import HomePage from './pages/home'
import OrderPage from './pages/orders'
import FormPage from './pages/formulario'


const App = () => {
    return (
        <div>
            <Navegacion></Navegacion>
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={ HomePage } exact />
                    <Route path='/description/:id' component={ OrderPage } />
                    <Route path='/form/:id' component={ FormPage } />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;