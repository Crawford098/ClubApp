<?php namespace App\Http\Api\v1;

use App\Models\Members\MembersModel;

class Members
{
    protected $membersModel;

    public function __construct()
    {
        $this->membersModel = new MembersModel();
    }

    public function show () : object
    {
        return response()->json(['respuesta' => 'hola']);
    }
}
