import React,{useState,useEffect} from 'react';
import './styles/pokemons-style.css'
import  {fetchSinglePokemon} from './service';
import { useParams } from 'react-router-dom';





const  ShowPokemon = (props)=> {
  const [pokemon,setPokemon] = useState({});
  const [error,setError] = useState();
  let { id } = useParams();


  useEffect(() => {

      const getSinglePokemon = async () => {
          const response = await fetchSinglePokemon(id)

          if(response.status=='401'){
            setError(response.message)
          }
          if(response.status=='200'){
              setPokemon(previousPokemon=>{
              return{...response.data}
            });
          }

      }
      getSinglePokemon();
  }, []);

  return (
    <div>
          <a className="link" href="/">Go Home</a>
        <h3>Pokemon Details</h3>
        <h2 className="text-danger mt-4 inner">{error}</h2>
        <div className="col-md-6 mt-5">
            <div className='card'>
                <a  href={`/data-view/edit/${pokemon.id}`} className="btn btn-success">Edit</a>
                <p className="data"><b>Identifier</b>: {pokemon.identifier}</p>
                <p><b>Height</b>: {pokemon.height}</p>
                <p><b>Weight</b>: {pokemon.weight}</p>
                <p><b>Base Experience</b>: {pokemon.base_experience}</p>
                <p><b>Is default</b>:{pokemon.is_default}</p>
            </div>
        </div>
    </div>
  );
}

export default ShowPokemon;
