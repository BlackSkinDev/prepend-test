<?php

namespace App\Http\Controllers\Api;

use App\Models\Pokemon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\Pokemons\PokemonResource;

use App\ApiTraits\ResponseStructure;

class PokemonController extends Controller
{

    use ResponseStructure;



    // get all pokemons
    public function index(){
        $pokemons = PokemonResource::collection(Pokemon::orderBy('order','asc')->get());
        return $this->successResponse($pokemons,null,Response::HTTP_OK);
    }

    // get single pokemon
    public function show(){

    }

    // update single pokemon
    public function update(){

    }

}
