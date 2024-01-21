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

        if ($validator->fails())
        {
            return ['result' => 0, 'error' => $validator->errors()];
        }

        $userCredential = $this->generateCredentials();

        $this->membersModel->create([
            'clubId'                        => $request->clubId,
            'classId'                       => $request->classId,
            'club_types'                    => $request->club_types,
            'username'                      => $userCredential['userName'],
            'email'                         => $request->email,
            'password'                      => $userCredential['password'],
            'first_name'                    => $request->first_name,
            'last_name'                     => $request->last_name,
            'date_of_birth'                 => $request->date_of_birth,
            'directive_positionId'          => $request->directive_positionId,
            'active'                        => $request->active,
        ]);

        return ['result' => 1];
    }

    public function update (int $memberId, Request $request) : array
    {
        $validator = Validator::make($request->all(), [
            'username'                      => 'alpha_num|min:5|unique:App\Models\Members\MembersModel,username',
            'password'                      => 'required',
            'confirm_password'              => 'required',
            'date_of_birth'                 => 'date|date_format:Y-m-d',
            'baptism_date'                  => 'date|date_format:Y-m-d',
        ]);

        //todo: confirm password

        if ($validator->fails())
        {
            return ['result' => 0, 'error' => $validator->errors()];
        }

        $membersData                    = $this->membersModel->find($memberId);

        $updateData = [
            'username'                  => $request->username,
            'password'                  => $request->password,
            'date_of_birth'             => $request->date_of_birth,
            'babtism_date'              => $request->babtism_date,
            'classId'                   => $request->classId
        ];

        if ($membersData->update($updateData))
        {
            return ['result' => 1];
        }

        return ['result' => 0, 'response' => 'Hubo un error al actualizar el registro'];
    }

    public function delete (int $memberId ) : array
    {

        $memberData                     = $this->membersModel->find($memberId);

        if (!isset($memberData))
        {
            return ['result' => 0];
        }

        if (!$memberData->update(['hidden' => 1, 'active' => 0]))
        {
            return ['result' => 0, 'Hubo un error al actualizar el registro'];
        }

        return ['result' => 1];
    }

    private function generateCredentials (Request $request)  : array//todo: terminar funcion
    {
        return [
            'userName' => $request->fistname,
            'password' => 123456
        ];
    }
}
