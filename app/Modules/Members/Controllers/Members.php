<?php namespace App\Modules\Members\Controllers;

use App\Models\Members\MembersModel;
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

    }
}
