<?php namespace App\Modules\Units\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Units extends BaseController
{
    public function __construct()
    {
    }

    public function index () : \Inertia\Response
    {
        return Inertia::render('Modules/Units/Units');
    }
}
