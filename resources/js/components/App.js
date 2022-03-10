import * as React from "react";
import PokemonList from './Pokemons/PokemonList';
import PokemonList from './Pokemons/PokemonList';
import NotFound from './NotFound.js'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container} from 'react-bootstrap'

const App = ()=> {
    return (
        <div>
            <Router>
            <div>
                <Container className="p-4">
                    <h1>Prepend Pokemon List</h1>
                <Routes>
                    <Route exact path="/"element={<PokemonList/>}/>
                    <Route exact path={`/data-view/pokemons/:id`}  element={<ShowPokemon/>}/>
                    <Route exact path="*" element={<NotFound/>}/>
                </Routes>
                </Container>
            </div>
            </Router>
        </div>
    );
}
export default App;
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}


