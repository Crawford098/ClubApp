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
        Schema::table('cl_church', function (Blueprint $table) {
            // Agregar el nuevo campo field_officeId
            $table->unsignedBigInteger('field_officeId')->after('churchId');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cl_church', function (Blueprint $table) {
            // Revertir los cambios, eliminar el campo field_officeId si existe
            $table->dropColumn('field_officeId');
        });
    }
};
