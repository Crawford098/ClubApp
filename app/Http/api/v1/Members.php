<?php namespace App\Http\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Members\MembersModel;
use App\Validation\MembersRules;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class Members extends Controller
{
    protected $membersModel;
    protected $validationRules;

    public function __construct()
    {
        $this->membersModel                 = new MembersModel();
        $this->validationRules              = new MembersRules();
    }

    public function show () : array
    {
        return $this->membersModel->all()->toArray();
    }

    public function insert (Request $request) : array
    {
        $valid                              = $this->validationRules->validate($request);

        if (!$valid['result'])
        {
            return ['result' => 0, 'error' => $valid['error']];
        }

        $userCredential = $this->generateCredentials($request);

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
        $membersData                        = $this->membersModel->find($memberId);
        $valid                              = $this->validationRules->validateUpdate($request, $membersData);

        if ($valid['result'])
        {
            return ['result' => 0, 'error' => $valid['result']];
        }

        $updateData = [
            'username'                  => $request->username,
            'password'                  => Hash::make($request->newPassword),
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

    private function generateCredentials (Request $request)  : array
    {
        return [
            'userName' => $request->first_name. '-'. date('Y'),
            'password' => Hash::make($request->password)
        ];
    }
}
