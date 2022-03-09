<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middlware'=>'auth:api'],function(){
    Route::namespace('Api')->group(function () {
        // api resource route for pokemons
        Route::apiResource('pokemons',PokemonController::class);

    });
});
