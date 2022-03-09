<?php

namespace App\Http\Controllers\Api;

use App\Models\Pokemon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\ApiTraits\ResponseStructure;
use App\Http\Controllers\Controller;

use App\Http\Resources\Pokemons\PokemonResource;
use App\Http\Requests\Pokemons\PokemonUpdateFormRequest;

class PokemonController extends Controller
{

    use ResponseStructure;



    // get all pokemons
    public function index(){
        $pokemons = PokemonResource::collection(Pokemon::orderBy('order','asc')->get());
        return $this->successResponse($pokemons,null,Response::HTTP_OK);
    }

    // get single pokemon
    public function show(Pokemon $pokemon){
        $pokemons = new PokemonResource($pokemon);
        return $this->successResponse($pokemons,null,Response::HTTP_OK);
    }

    // update single pokemon
    public function update(PokemonUpdateFormRequest $request, Pokemon $pokemon){
        $pokemon->update($request->validated());
        return $this->successResponse(null,'Pokemon updated successfully',Response::HTTP_OK);
    }
    

}
