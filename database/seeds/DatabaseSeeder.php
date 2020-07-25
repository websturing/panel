<?php

use App\mdrolesPermission;
use App\model\mdroles;
use App\model\mdrolesModul;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        // factory(mdrolesPermission::class, 10)->create()->each(function ($permission) {
        //     // Seed the relation with one address
        //     $modul = factory(mdrolesModul::class, 10)->make();
        //     $permission->modul()->saveMany($modul);

        //     // Seed the relation with 5 purchases
        //     $roles = factory(mdrolesPermission::class, 5)->make();
        //     $permission->purchases()->saveMany($roles);
        // });
        factory(mdroles::class, 2)->create()->each(function ($role) {
            // Seed the relation with one address
            $permission = factory(mdrolesPermission::class, 10)->make();
            $role->permission()->saveMany($permission);
        });
        factory(mdrolesModul::class, 10)->create()->each(function ($modul) {
            // Seed the relation with one address
            $permission = factory(mdrolesPermission::class, 10)->make();
            $modul->permission()->saveMany($permission);
        });
    }
}
