import './styles/pokemons-style.css'
import  {fetchPokemons} from './service';
import { useNavigate } from 'react-router-dom';
import {Table,Link} from 'react-bootstrap'



import React,{useState,useEffect} from 'react';


const  PokemonList = (props)=> {
    const [pokemons,setPokemons] = useState([]);
    const [error,setError] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const getPokemons = async () => {
            const response = await fetchPokemons()

            if(response.status=='401'){
              setError(response.message)
            }
            if(response.status=='200'){
                console.log(response.data)
                setPokemons(previousPokemons=>{
                return[...response.data]
              });
            }

        }
        getPokemons();
    }, []);

  return (
    <div>
        <h3>Pokemon List</h3>
        <h2 className="text-danger mt-4 inner">{error}</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Identifier</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Base Experience</th>
                <th>Is Default</th>
                </tr>
            </thead>
            <tbody>
                {pokemons.map((pokemon, index) => {
                return (
                    <tr key={pokemon.id}>
                        <td>{index+1}</td>
                        <td>{pokemon.identifier}</td>
                        <td>{pokemon.height}</td>
                        <td>{pokemon.weight}</td>
                        <td>{pokemon.base_experience}</td>
                        <td>{pokemon.is_default}</td>
                        <td>
                            <a href='/hey' className="btn btn-primary">View</a>
                        </td>
                    </tr>
                )
                })}

            </tbody>
        </Table>
    </div>
  );
}

export default PokemonList;
