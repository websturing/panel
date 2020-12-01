<?php

namespace App\Http\Controllers;

use App\mdBerita;
use Illuminate\Http\Request;
use stdClass;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use File;
use Carbon\Carbon;

class beritaControl extends Controller
{

    function index(Request $r)
    {

        $type = $r->get("type");
        if ($type == 'HastagFull') {
            return self::HastagFull($r);
        } elseif ($type == 'uploadImageUtama') {
            return self::uploadImageUtama($r);
        } elseif ($type == 'AllBerita') {
            return self::AllBerita($r);
        } elseif ($type == 'insert') {
            return self::insert($r);
        } elseif ($type == 'update') {
            return self::updateData($r);
        } elseif ($type == 'GetBeritaById') {
            return self::GetBeritaById($r);
        } elseif ($type == 'RangeDate') {
            return self::RangeDate($r);
        } elseif ($type == 'UploadIsi') {
            return self::UploadIsi($r);
        }
    }


    function UploadIsi(Request $r)
    {
        $uploadedFile = $r->file('file');
        $folderDay = date("Ymd");
        $pathFolder = Storage::disk("artikel")->path($folderDay);
        if (!File::exists($pathFolder)) {
            File::makeDirectory($pathFolder, $mode = 0777, true, true);
        }
        $filename = Str::random(10) . '_afriandi.' . $uploadedFile->getClientOriginalExtension();
        $path = Storage::disk("artikel")->path($folderDay . '/' . $filename);
        $file_url = Storage::disk('artikel')->putFileAs($folderDay, $uploadedFile, $filename);
        // file_put_contents($path, $uploadedFile->getClientOriginalName());
        return "http://inilahkepri.id/resources/Artikel_Thumbnail/" . $folderDay . '/' . $filename;
        
    }

    function datapaginate(Request $r)
    {
        $perPage = Request()->has('per_page') ? (int) Request()->per_page : null;
        if ($r->exists('filter')) {
            $value = "%{$r->filter}%";
            $pag =  mdBerita::where("judul", 'like', $value)
                ->orWhere("tgl_publish", "like", $value)
                ->orderBy("tgl_publish", "DESC")
                ->orderBy("jam", "DESC")
                ->paginate();
        } else {
            $pag =  mdBerita::orderBy("tgl_publish", "DESC")->orderBy("jam", "DESC")->paginate();
        }
        return $pag;
    }

    function HastagFull(Request $r)
    {
        $tag = mdBerita::where('tag', '!=', '')->pluck('tag')->all();

        $array = array();
        foreach ($tag as $key => $value) {
            $ex = explode(',', $value);
            $array = array_merge($array, $ex);
        }
        return array_slice(array_unique($array), 0, 600);
    }

    function uploadImageUtama(Request $r)
    {
        date_default_timezone_set("Asia/Bangkok");
        $timestamp = date("Y-m-d H:i:s");
        $folderDay = date("Ymd");

        $form = $r->get("form");

        $pos = strpos($form['gambar'], ';');

        $filetype = explode('/', substr($form['gambar'], 0, $pos))[1];
        $pathFolder = Storage::disk("artikel")->path($folderDay);
        if (!File::exists($pathFolder)) {
            File::makeDirectory($pathFolder, $mode = 0777, true, true);
        }

        $expoloded = explode(",", $form['gambar']);
        $decoded = base64_decode($expoloded[1]);

        $extension =  $filetype;
        $name = Str::slug($form["judul"], '_');
        $filename = $name . '.' . $extension;
        $path = Storage::disk("artikel")->path($folderDay . '/' . $filename);

        file_put_contents($path, $decoded);
        return $filename;
    }

    function GetBeritaById(Request $r)
    {
        return mdBerita::where('id_berita', $r->get('id'))->first();
    }

    function AllBerita(Request $r)
    {
        return mdBerita::where("judul", '!=', '')->orderBy('tgl_publish', 'DESC')->orderBy('jam', "DESC")->get();
    }


    function RangeDate(Request $r)
    {

        $start = date("Y-m-d", strtotime($r->get("start")));
        $end = date("Y-m-d", strtotime($r->get("end")));

        // // return $start;
        // return $start . ' / ' . $end;
        // // $start = Carbon::now()->subMonth(1)->startOfMonth()->toDateString();
        // // $end = Carbon::now()->toDateString();
        return mdBerita::whereBetween("tgl_publish", [$start, $end])->orderBy("tgl_publish", "DESC")->orderBy("jam", "DESC")->paginate();
    }

    /*-----====== CRUD =====------*/

    function insert(Request $r)
    {
        $data = $r->get('form');

        date_default_timezone_set("Asia/Bangkok");
        $today = date("Y-m-d");
        $tglPublish = date("Y-m-d", strtotime($data['tgl_publish']));
        $jam = date("H:i");

        $tag = implode(',', $data['tag']);
        $gambar = self::uploadImageUtama($r);

        $toDataBase = array(
            "id_kategori" => $data['id_kategori'],
            "id_subkategori" => $data['id_subkategori'],
            "judul" => $data['judul'],
            "isi_berita" => $data['isi_berita'],
            "tgl_posting" => $today,
            "tgl_publish" => $tglPublish,
            "jam" => $jam,
            "gambar" => $gambar,
            "ket_gambar" => $data['ket_gambar'],
            "tag" => $tag,
            "headline" => $data['headline'],
            "publish" => $data['publish'],
        );

        // return $toDataBase;
        mdBerita::insert($toDataBase);

        return "berhasil";
    }

    function updateData(Request $r)
    {
        $data = $r->get('form');
        date_default_timezone_set("Asia/Bangkok");
        $today = date("Y-m-d");
        $tglPublish = date("Y-m-d", strtotime($data['tgl_publish']));
        $jam = date("H:i");
        $image_parts = explode(";base64,", $data['gambar']);
        $tag = implode(',', $data['tag']);
        if (count($image_parts) > 1) {
            $gambar = self::uploadImageUtama($r);
            $toDataBase = array(
                "id_kategori" => $data['id_kategori'],
                "id_subkategori" => $data['id_subkategori'],
                "judul" => $data['judul'],
                "isi_berita" => $data['isi_berita'],
                "tgl_posting" => $today,
                "tgl_publish" => $tglPublish,
                "gambar" => $gambar,
                "ket_gambar" => $data['ket_gambar'],
                "tag" => $tag,
                "headline" => $data['headline'],
                "publish" => $data['publish'],
            );
        } else {
            $toDataBase = array(
                "id_kategori" => $data['id_kategori'],
                "id_subkategori" => $data['id_subkategori'],
                "judul" => $data['judul'],
                "isi_berita" => $data['isi_berita'],
                "tgl_posting" => $today,
                "tgl_publish" => $tglPublish,
                "ket_gambar" => $data['ket_gambar'],
                "tag" => $tag,
                "headline" => $data['headline'],
                "publish" => $data['publish'],
            );
        }


        // return $toDataBase;
        mdBerita::where('id_berita', $data['id_berita'])->update($toDataBase);

        return "berhasil";
    }
}
