<?php

use App\Http\Controllers\ProfileController;
use App\Modules\Calendar\Controllers\Calendar;
use App\Modules\Dashboard\Controllers\Dashboard;
use App\Modules\Units\Controllers\Units;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Modules\Members\Controllers\Members;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth'])->group(function ()
{
    Route::controller(Dashboard::class)->group(function ()
    {
        Route::get('/dashboard', 'index')->name('dashboard');
    });

    Route::controller(Members::class)->group(function ()
    {
        Route::get('/members', 'index')->name('members');
        Route::get('/members/add', 'addMember')->name('addMember');
        Route::post('/members/insert', 'insert')->name('members.insert');
        Route::post('/members/update', 'update')->name('members.update');
    });

    Route::controller(Units::class)->group(function ()
    {
        Route::get('/units', 'index')->name('units');
    });

    Route::controller(Calendar::class)->group(function ()
    {
        Route::get('/calendar', 'index')->name('calendar');
    });

    Route::controller(Treasury::class)->group(function ()
    {
        Route::get('/treasury', 'index')->name('treasury');
    });
});

//Todo: Revisar lógica
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
