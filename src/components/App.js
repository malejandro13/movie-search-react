import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Movies from '../containers/MovieContainer'
import MovieDetail from '../containers/MovieDetailContainer'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={["/", "/movie"]} component={Movies} />
            < Route exact path="/movie/:id" component={MovieDetail} />
        </Switch>
    </BrowserRouter>

)

export default App