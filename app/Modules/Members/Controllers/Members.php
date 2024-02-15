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
//        dd($this->memberModel->select(['memberId', 'first_name', 'last_name', 'email', 'phone'])->get()->toArray());
        return Inertia::render('Modules/Members/Index', [
            'members' => $this->memberModel->select(['first_name', 'last_name', 'email', 'phone'])->get()->toArray()
        ]);
    }

    public function addMember() : Response {
        return Inertia::render('Modules/Members/MemberAdd');
    }
}
