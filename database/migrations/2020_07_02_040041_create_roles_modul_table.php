<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesModulTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles_modul', function (Blueprint $table) {
            $table->id('role_modul_id');
            $table->string('nama');
            $table->string('url');
            $table->string('icon');
            $table->integer('parent_id');
            $table->enum('type', array('parent', 'child'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles_modul');
    }
}
