import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// pages
import Home from './pages/home'
import MyPokemon from './pages/myPokemon'
import DetailPokemon from './pages/detailPokemon'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path='/pokemon/:name' exact component={DetailPokemon}/>
                <Route path='/my-pokemon' exact component={MyPokemon}/>
                <Route path='/' exact component={Home}/>
            </Switch>
        </Router>
    )
}

export default Routes