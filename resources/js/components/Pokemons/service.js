import Axios from 'axios'

const API_URL = process.env.MIX_API_URL
const USERNAME = process.env.MIX_APP_USER_USERNAME
const PASSWORD = process.env.MIX_APP_USER_PASSWORD


const token = Buffer.from(`${USERNAME}:${PASSWORD}`, 'utf8').toString('base64')
console.log(token)

//get all pokemon
export const fetchPokemons = async ()=>{
    try{

      const { status, data:{data} } =   await Axios.get(`${API_URL}/pokemons`,
      { headers: {"Authorization" : `Basic ${token}`} }
    );

      return {
        status,
        data
      };
    }
    catch(error){
      const {data:{message},status}=error.response
      return {
          status,
          message,
      }
    }
  }


  //get all pokemon
export const fetchSinglePokemon = async (id)=>{
    try{

      const { status, data:{data} } =   await Axios.get(`${API_URL}/pokemons/${id}`,
      { headers: {"Authorization" : `Basic ${token}`} }
    );

      return {
        status,
        data
      };
    }
    catch(error){
      const {data:{message},status}=error.response
      return {
          status,
          message,
      }
    }
  }


//update pokemon
export const updatePokemon = async (payload,id)=>{
    try{

      const { status, data:{data,message} } =   await Axios.put(`${API_URL}/pokemons/${id}`,payload,
      { headers: {"Authorization" : `Basic ${token}`} }
    );
      return {
        status,
        data,
        message,
      };
    }
    catch(error){
      const {data:{message,data},status}=error.response
      return {
          status,
          message,
          data
      }
    }
  }

