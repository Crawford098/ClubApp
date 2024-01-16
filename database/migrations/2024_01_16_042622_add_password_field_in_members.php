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
            $table->string('username')->nullable()->after('club_types');
            $table->string('email')->nullable()->after('username');
            $table->string('password')->nullable()->after('email');
            $table->tinyInteger('active')->nullable()->default(1)->after('team_positionId');
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
            $table->dropColumn('username');
            $table->dropColumn('email');
            $table->dropColumn('password');
            $table->dropColumn('active');
        });
    }
};
