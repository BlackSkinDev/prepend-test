import React,{useState,useEffect} from 'react';
import './styles/pokemons-style.css'
import  {updatePokemon,fetchSinglePokemon} from './service';
import { useParams } from 'react-router-dom';

import {Form,Button} from 'react-bootstrap'





const  EditPokemon = (props)=> {

  let { id } = useParams();

  const [identifier,setIdentifier] = useState('');
  const [height,setHeight] = useState('');
  const [weight,setWeight] = useState('');
  const [bexperience,setBexperience] = useState('');
  const [isdefault,setIsDefault] = useState('');
  const [error,setError] = useState();
  const [errors,setErrors] = useState([]);

  const identifierHandler = (e)=>{
    setIdentifier(e.target.value)
  }

  const heightHandler = (e)=>{
    setHeight(e.target.value)
  }

  const weightHandler = (e)=>{
    setWeight(e.target.value)
  }

  const bExperienceHandler = (e)=>{
    setBexperience(e.target.value)
  }

  const isDefaultHandler = (e)=>{
    setIsDefault(e.target.value)
  }



  const submitHandler =async (e)=>{
    e.preventDefault();
    const payload = {
        identifier:identifier,
        weight:weight,
        height:height,
        base_experience:bexperience,
        is_default:isdefault

    }
    const response = await updatePokemon(payload,id)
    if(response.status=='401'){
        setError(setError=>{
            return{...response.message}
          });
    }
    if(response.status=='400'){
        setErrors(previousErrors=>{
            return[...response.data]
          });
    }
    if(response.status=='200'){
       alert(response.message)
    }
  }







  useEffect(() => {

      const getSinglePokemon = async () => {
          const response = await fetchSinglePokemon(id)

          if(response.status=='401'){
            setError(response.message)
          }
          if(response.status=='200'){
              console.log(response.data)
           setIdentifier(response.data.identifier)
           setHeight(response.data.height)
           setWeight(response.data.weight)
           setBexperience(response.data.base_experience)
           setIsDefault(response.data.is_default)

          }

      }
      getSinglePokemon();
  }, []);


  return (
    <div>
          <a className="link" href="/">Go Home</a>
        
        <h3>Edit Pokemon Details</h3>

        <h2 className="text-danger mt-4 inner">{error}</h2>
        <div className="col-md-6 mt-5">
            <div className='card'>
            <Form onSubmit={submitHandler}>
            <ul className="text-danger">
            {errors.map((error,idx) =>
                <li key={idx}>{error}</li>
            )}
             </ul>

            <Form.Label htmlFor="inputPassword5">Identifier</Form.Label>
            <Form.Control
                type="text"
                value={identifier}
                onChange={identifierHandler}

            />
             <Form.Label htmlFor="inputPassword5">Height</Form.Label>
            <Form.Control
                type="number"
                value={height}
                onChange={heightHandler}


            />
             <Form.Label htmlFor="inputPassword5">Weight</Form.Label>
            <Form.Control
                type="number"
                value={weight}
                onChange={weightHandler}


            />
             <Form.Label htmlFor="inputPassword5">Base Experience</Form.Label>
            <Form.Control
                type="number"
                value={bexperience}
                onChange={bExperienceHandler}


            />
              <Form.Label htmlFor="inputPassword5">Is Default</Form.Label>
            <Form.Control
                type="number"
                value={isdefault}
                onChange={isDefaultHandler}


            />
            <Button variant="primary" type="submit" className="mt-5">Is Default</Button>
            </Form>
            </div>
        </div>
    </div>
  );
}

export default EditPokemon;
