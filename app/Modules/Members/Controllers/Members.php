<?php namespace App\Modules\Members\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Members extends BaseController
{
    public function __construct()
    {

    }

    public function index () : \Inertia\Response
    {
        return Inertia::render('Modules/Members/Index');
    }
}
