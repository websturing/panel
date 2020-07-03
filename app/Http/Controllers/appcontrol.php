<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class appcontrol extends Controller
{
    function index()
    {
        return view('panel.index');
    }

    function login(Request $request)
    {

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return redirect()->intended('home');
        }
    }
    function register()
    {
        //     return "afriandi";
        return view('panel.register');
    }
}
