<?php namespace App\Modules\Calendar\Controller;

use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;


class Calendar extends BaseController
{

    public function __construct()
    {
    }

    public function index() : \Inertia\Response
    {
        return Inertia::render('Modules/Calendar/Calendar');
    }
}
