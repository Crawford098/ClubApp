<?php namespace App\Modules\Dashboard\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Dashboard extends BaseController
{

    public function __construct()
    {
    }

    public function index () : \Inertia\Response
    {
        return Inertia::render('Modules/Dashboard/Dashboard');
    }
}
