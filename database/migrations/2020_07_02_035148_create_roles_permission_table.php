<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesPermissionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles_permission', function (Blueprint $table) {
            $table->id("role_permission_id");
            $table->integer("role_id");
            $table->integer("role_modul_id");
            $table->enum('read', array('true', 'false'));
            $table->enum('create', array('true', 'false'));
            $table->enum('update', array('true', 'false'));
            $table->enum('delete', array('true', 'false'));
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
        Schema::dropIfExists('roles_permission');
    }
}
