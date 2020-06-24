<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class appcontrol extends Controller
{
    function index()
    {
        return view('panel.index');
    }
}
