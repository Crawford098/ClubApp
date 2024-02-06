<?php namespace App\Validation;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class MembersRules
{

    public  function __construct()
    {

    }

    public function validate (Request $request) : array
    {
        $validator = Validator::make($request->all(), [
            'clubId'                        => 'required',
            'classId'                       => 'required',
            'club_types'                    => 'required',
            'email'                         => 'required|unique:App\Models\Members\MembersModel,email|email',
            'first_name'                    => 'required',
            'last_name'                     => 'required',
            'date_of_birth'                 => 'required|date|date_format:Y-m-d',
            'baptism_date'                  => 'date|date_format:Y-m-d',
            'directive_positionId'          => 'required',
            'active'                        => 'required',
        ],[
            'email.required'                => 'El campo email es requerido',
            'email.email'                   => 'Email no valido',
        ]);

        if ($request->password !== $request->confirmPassword)
        {
            $validator->after(function ($validator) {
                $validator->errors()->add(
                    'differentPassword', 'The password are different.'
                );
            });
        }

        return ['result' => $validator->fails(), 'error' => $validator->errors()];
    }

    public function validateUpdate (Request $request, object $membersData) : array
    {
        $validator = Validator::make($request->all(), [
            'username'                      => 'alpha_num|min:5|unique:App\Models\Members\MembersModel,username',
            'password'                      => 'required',
            'newPassword'                   => 'required',
            'confirm_password'              => 'required',
            'date_of_birth'                 => 'date|date_format:Y-m-d',
            'baptism_date'                  => 'date|date_format:Y-m-d',
        ]);

        if (Hash::check($request->password, $membersData->password))
        {
            $validator->after(function ($validator) {
                $validator->errors()->add(
                    'incorrectPassword', 'Incorrect password.'
                );
            });
        }

        if ($request->newPassword !== $request->confirmPassword)
        {
            $validator->after(function ($validator) {
                $validator->errors()->add(
                    'differentPassword', 'The password are different.'
                );
            });
        }

        return ['result' => $validator->fails(), 'error' => $validator->errors()];
    }
}
