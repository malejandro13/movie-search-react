import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Welcome from '../pages/Welcome'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
        </Switch>
    </BrowserRouter>
)

export default App