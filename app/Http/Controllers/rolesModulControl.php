<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class rolesModulControl extends Controller
{
    function index(Request $r)
    {
        $type = $r->get("type");
        if ($type == 'modul') {
            return self::moduldata($r);
        } elseif ($type == 'temp') {
            return self::temp($r);
        }
    }

    function moduldata(Request $r)
    {
        return "afriandi";
    }

    function temp(Request $r)
    {
        return "temp";
    }
}
