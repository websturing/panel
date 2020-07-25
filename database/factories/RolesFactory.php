<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\mdrolesPermission;
use App\Model;
use App\model\mdroles;
use App\model\mdrolesModul;
use Faker\Generator as Faker;

$factory->define(mdrolesModul::class, function (Faker $faker) {

    return [
        'nama' => $faker->name,
        'url'  => $faker->name,
        'icon'  => $faker->name,
        'type'  => "parent",
        'parent_id'  => "1",
    ];
});

$factory->define(mdrolesPermission::class, function (Faker $faker) {

    $crud = $faker->randomElement(['true', 'false']);
    return [
        "role_id" => factory(mdroles::class),
        "role_modul_id" => factory(mdrolesModul::class),
        'read' => $crud,
        'create' => $crud,
        'update' => $crud,
        'delete' => $crud,
        'is_active' => "true",
    ];
});

$factory->define(mdroles::class, function (Faker $faker) {

    $crud = $faker->randomElement(['true', 'false']);
    return [
        'role' => $faker->name,
        'is_active' => "true",
    ];
});
