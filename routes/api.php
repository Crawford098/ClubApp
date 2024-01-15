<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Api\v1\Members;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(Members::class)->group(function () {
    Route::get('/members', 'show');
});

//Route::middleware([])->group(function () {
//    Route::controller(Members::class)->get('Api/v1/', function () {
//        Route::get('members', 'show');
//    });
//});
