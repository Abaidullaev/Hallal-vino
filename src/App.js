import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Card from './components/card/Card'
import { Route } from 'react-router-dom';

function App() {
    return (
        <Route>
             <div>
                <Header/>

                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route exact path="/basket">
                        <BasketPage />
                    </Route>
                    <Route exact path="/category">
                        <h1>Category</h1>
                    </Route>
                    <Route exact path="/auth">
                        <h1>Authorization</h1>
                    </Route>
                    <Route path="*">
                        <h1>404 page not found</h1>
                    </Route>
                </Switch>
                
                <Card/>
            </div>
        </Route>
    );
}

export default App;
