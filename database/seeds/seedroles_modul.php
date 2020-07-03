<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class seedroles_modul extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID');

        for ($i = 1; $i <= 50; $i++) {

            // insert data ke table pegawai menggunakan Faker
            DB::table('roles_modul')->insert([
                'nama' => $faker->name,
                'url' => $faker->jobTitle,
                'icon' => $faker->numberBetween(25, 40),
                'parent_id' => 0,
            ]);
        }
    }
}
