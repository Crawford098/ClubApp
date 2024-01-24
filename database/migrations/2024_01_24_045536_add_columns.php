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
        Schema::table('cl_members', function (Blueprint $table) {
            $table->string('health_insurance_name')->nullable()->after('address');
            $table->integer('health_insurance_number')->nullable()->after('health_insurance_name');
            $table->integer('blood_typeId')->default(0)->after('team_positionId');
            $table->integer('religionId')->default(0)->after('blood_typeId');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cl_members', function (Blueprint $table) {
            $table->dropColumn('health_insurance_name');
            $table->dropColumn('health_insurance_number');
            $table->dropColumn('blood_typeId');
            $table->dropColumn('religionId');
        });
    }
};
