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
Route::get("/artikel/berita/data", "beritaControl@datapaginate");
Route::get("/videos/data", "videosControl@data");

// Route::get("/register", "appcontrol@register");
Route::middleware(['auth'])->group(function () {

    Route::get("/users/getById", "appcontrol@getById");
    Route::post("/Masterberita", "beritaControl@index");
    Route::post("/MasterberitaUploadIsi", "beritaControl@UploadIsi");
    Route::get("/MasterberitaRange", "beritaControl@RangeDate");
    Route::post("/MasterKategori", "kategoriControl@index");
    Route::post("/MasterSubKategori", "subKategoriControl@index");
    Route::post("/MasterVideos", "videosControl@index");
    Route::get('/home', 'appcontrol@index')->name('home');
    Route::get("/logout", "appcontrol@logout");
    Route::post("/roles/modul", "rolesModulControl@index");
    Route::get("/roles/modul/data", "rolesModulControl@moduldata");
    Route::post("/roles/permission", "permissionControl@index");
    Route::get("/roles/permission/data", "permissionControl@data");
    Route::post("/roles/role", "rolesControl@index");
    Route::get("/{any}", "appcontrol@index")->where("any", ".*");
});
