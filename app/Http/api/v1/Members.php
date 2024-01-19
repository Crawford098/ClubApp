<?php namespace App\Http\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Members\MembersModel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class Members extends Controller
{
    protected $membersModel;

    public function __construct()
    {
        $this->membersModel = new MembersModel();
    }

    public function show () : array
    {
        return $this->membersModel->all()->toArray();
    }

    public function insert (Request $request) : array
    {
        $validator = Validator::make($request->all(), [
            'clubId'                        => 'required',
            'classId'                       => 'required',
            'club_types'                    => 'required',
            'username'                      => 'required|alpha_num|min:5|unique:App\Models\Members\MembersModel,username',
            'email'                         => 'required|unique:App\Models\Members\MembersModel,email|email',
            'password'                      => 'required',
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

        if ($validator->fails())
        {
            return ['result' => 0, 'error' => $validator->errors()];
        }

        $this->membersModel->create([
            'clubId'                        => $request->clubId,
            'classId'                       => $request->classId,
            'club_types'                    => $request->club_types,
            'username'                      => $request->username,
            'email'                         => $request->email,
            'password'                      => $request->password,
            'first_name'                    => $request->first_name,
            'last_name'                     => $request->last_name,
            'date_of_birth'                 => $request->date_of_birth,
            'directive_positionId'          => $request->directive_positionId,
            'active'                        => $request->active,
        ]);

        return ['result' => 1];
    }
}
