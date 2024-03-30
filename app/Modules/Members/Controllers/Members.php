<?php namespace App\Modules\Members\Controllers;

use App\Models\Modules\Members\MembersModel;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\Request;

class Members extends BaseController
{
    protected $memberModel;

    public function __construct()
    {
        $this->memberModel = new MembersModel();
    }

    public function index (): Response
    {
        $columns = [ 'memberId', 'first_name', 'last_name', 'phone', 'email' ];
        $result = $this->memberModel->select($columns)->get()->toArray();

        $data = [];

        foreach ($result as $key => $row)
        {
            $data[$key]['key'] = $row['memberId'];
            $data[$key]['name'] = $row['first_name'] . ' ' . $row['last_name'];
            $data[$key]['phone'] = $row['phone'];
            $data[$key]['email'] = $row['email'];
        }

        return Inertia::render('Modules/Members/Index', [
            'tableData'         => $data
        ]);
    }

    public function addMember() : Response {
        return Inertia::render('Modules/Members/MemberAdd');
    }

    public function insert(Request $request) {

        dd($request->session()->all());

        $data = [
            // 'clubId' => session
            // 'club_types' => session
            'first_name'                    => $request->name,
            'last_name'                     => $request->lastname,
            'email'                         => $request->email, //agregar en el formulario react
            'document'                      => $request->document,
            'phone'                         => $request->phone,
            'address'                       => $request->address,
            'baptized'                      => $request->baptized,
            'date_of_birth'                 => $request->birthdate,
            'baptism_date'                  => $request->birthdate,
            'directive_positionId'          => $request->birthdate,
            'hidden'                        => 0,
            'teamId'                        => isset($request->teamId) ? $request->teamId : 0, //agregar en el formulario react
            'classId'                       => isset($request->classId) ? $request->classId : 0, //agregar en el formulario react
            'team_positionId'               => isset($request->team_positionId) ? $request->team_positionId : 0, //agregar en el formulario react
            // 'document' => $request->document, agregar BD
            // 'healthInsurance' => $request->healthInsurance, agregar BD

        ];

        $this->memberModel->create($data);
    }
}
