<?php namespace App\Http\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Members\MembersModel;
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

    public function insert () : array
    {
        return [];
    }
}
