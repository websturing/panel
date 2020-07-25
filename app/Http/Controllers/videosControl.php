<?php

namespace App\Http\Controllers;

use App\mdVideos;
use Illuminate\Http\Request;

class videosControl extends Controller
{
    function inilahchannel(Request $r)
    {
        $perPage = Request()->has('per_page') ? (int) Request()->per_page : null;
        if ($r->exists('filter')) {
            $value = "%{$r->filter}%";
            $pag =  mdVideos::where("title", 'like', $value)
                ->orWhere("publishedAt", "like", $value)
                ->paginate();
        } else {
            $pag =  mdVideos::paginate();
        }
        return $pag;
    }
}
