<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Auth::routes();

Route::post("/login/submit", "appcontrol@login");

Route::get("/register", "appcontrol@register");
Route::middleware(['auth'])->group(function () {

    Route::get("/users/getById", "appcontrol@getById");
    Route::post("/Masterberita", "beritaControl@index");
    Route::post("/MasterKategori", "kategoriControl@index");
    Route::post("/MasterSubKategori", "subKategoriControl@index");
    Route::get('/home', 'HomeController@index')->name('home');
    Route::get("/logout", "appcontrol@logout");
    Route::post("/roles/modul", "rolesModulControl@index");
    Route::get("/roles/modul/data", "rolesModulControl@moduldata");
    Route::post("/roles/permission", "permissionControl@index");
    Route::get("/roles/permission/data", "permissionControl@data");
    Route::post("/roles/role", "rolesControl@index");
    Route::get("/{any}", "appcontrol@index")->where("any", ".*");
});
