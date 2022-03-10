<?php

namespace App\Http\Resources\Pokemons;

use Illuminate\Http\Resources\Json\JsonResource;

class PokemonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'identifier'=> $this->identifier,
            'height' => $this->height,
            'weight' => $this->weight,
            'base_experience' => $this->base_experience,
            'is_default' => $this->is_default,
        ];
    }
}
