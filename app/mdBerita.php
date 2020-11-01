<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class mdBerita extends Model
{
    protected $table        = "berita";
    protected $primaryKey   = "id_berita";

    public $timestamps = false;
    protected $appends = [
        'explodeTag',
        'folder',
        'value',
        'id',
        'seo',
    ];


    function getidattribute()
    {
        return $this->id_berita;
    }

    function getexplodeTagAttribute()
    {
        return explode(",", $this->tag);
    }
    function getvalueAttribute()
    {
        return $this->judul;
    }
    function getfolderAttribute()
    {
        return date("Ymd", strtotime($this->tgl_publish));
    }
    function getseoAttribute()
    {
        $crypt = str::slug($this->judul, "-");
        return $crypt;
    }
}
