<?php

namespace App\Http\Requests\Pokemons;

use Illuminate\Foundation\Http\FormRequest;
use phpDocumentor\Reflection\PseudoTypes\True_;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;

use Illuminate\Contracts\Validation\Validator;


class PokemonUpdateFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'identifier' => 'required|string',
            'height' => 'required|integer',
            'weight' => 'required|integer',
            'base_experience' => 'required|integer',
            'is_default' => 'required|integer',
        ];
    }

    protected function failedValidation(Validator $validator) {

        throw new HttpResponseException(response()->json([
            'status' => 'error',
            'message' =>null,
            'data'=>$validator->errors()->all()],Response::HTTP_BAD_REQUEST
        ));
    }
}
