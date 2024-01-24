<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cl_parents', function (Blueprint $table) {
            $table->id('parentId');
            $table->integer('relationshipId')->default(0);
            $table->string('fist_name')->nullable();
            $table->string('last_name')->nullable();
            $table->integer('telephone')->nullable();
            $table->integer('mobil_phone')->nullable();
            $table->string('email')->nullable();
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
        Schema::dropIfExists('cl_parents');
    }
};
