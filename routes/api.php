<?php

use App\User;
use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
//    dd($request->user());
    return $request->user();
});

Route::get('/users','UsersController@index');
Route::get('/user/{id}', function($id){
    $user = User::whereId($id)->get();
    return \App\Http\Resources\UsersResources::make($user);
});
