<?php namespace App\Modules\Members\Controllers;

use App\Models\Members\MembersModel;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

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

        return Inertia::render('Modules/Members/Index', [
            'tableData'         => $this->memberModel->select($columns)->get()->toArray(),
            'columns'           => $columns
        ]);
    }

    public function addMember() : Response {
        return Inertia::render('Modules/Members/MemberAdd');
    }
}
