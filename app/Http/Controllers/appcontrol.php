<?php

namespace App\Http\Controllers;

use App\mdrolesPermission;
use App\mdUsers;
use App\model\mdrolesModul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\permissionControl;

class appcontrol extends Controller
{
    function index(Request $r)
    {
        $roleId = $r->request->add(['data' => Auth::user()->role_id]);
        $menu = permissionControl::permissiondataByrolesId($r);
        return view('panel.index', compact('menu'));
    }

    function login(Request $request)
    {

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return redirect()->intended('/dashboard');
        }
    }
    function register()
    {
        //     return "afriandi";
        return view('panel.register');
    }
    function logout()
    {
        Auth::logout();
        return redirect('login');
    }

    function getById()
    {
        return mdUsers::where("id", Auth::user()->id)->first();
    }
}
