<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    use HasFactory;
    protected $table = 'pokemons';
    protected $fillable = [
        'identifier',
        'height',
        'weight',
        'base_experience',
        'is_default',
        'species_id',
        'order'
    ];
}
