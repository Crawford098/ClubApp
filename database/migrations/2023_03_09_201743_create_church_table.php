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
        Schema::create('cl_church', function (Blueprint $table) {
            $table->id('churchId');
            $table->integer('districtId');
            $table->integer('zoneId');
            $table->string('name')->nullable();
            $table->string('address')->nullable();
            $table->tinyInteger('hidden');

            $table->timestamps();
        });

        Schema::create('cl_members', function (Blueprint $table) {
            $table->id('memberId');
            $table->integer('clubId');
            $table->integer('teamId');
            $table->integer('classId');
            $table->string('club_types');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->tinyInteger('baptized')->nullable();
            $table->date('date_of_birth');
            $table->date('baptism_date')->nullable();
            $table->integer('directive_positionId');
            $table->integer('team_positionId');
            $table->tinyInteger('hidden');

            $table->timestamps();
        });

        Schema::create('cl_clubs', function (Blueprint $table) {
            $table->id('clubId');
            $table->integer('churchId');
            $table->string('name');
            $table->string('slogan');
            $table->integer('typeId');
            $table->integer('statusId');
            $table->tinyInteger('hidden');

            $table->timestamps();
        });

        Schema::create('cl_teams', function (Blueprint $table) {
            $table->id('teamId');
            $table->string('name');
            $table->string('slogan');
            $table->string('bible_verse');
            $table->string('logo');
            $table->tinyInteger('hidden');

            $table->timestamps();
        });

        Schema::create('cl_directive', function (Blueprint $table) {
            $table->id('directiveId');
            $table->string('position');

            $table->timestamps();
        });

        Schema::create('cl_club_types', function (Blueprint $table) {
            $table->id('typeId');
            $table->string('name');

            $table->timestamps();
        });

        Schema::create('cl_club_status', function (Blueprint $table) {
            $table->id('statusId');
            $table->string('name');

            $table->timestamps();
        });

        Schema::create('cl_progressive_classes', function (Blueprint $table) {
            $table->id('classId');
            $table->integer('clubId');
            $table->string('name');
            $table->string('color');
            $table->integer('age');

            $table->timestamps();
        });

        Schema::create('cl_roll_call', function (Blueprint $table) {
            $table->id('roll_callId');
            $table->tinyInteger('attendance');
            $table->tinyInteger('uniformity');
            $table->tinyInteger('bible');
            $table->tinyInteger('offering');
            $table->date('date');
            $table->tinyInteger('hidden');

            $table->timestamps();
        });

        Schema::create('cl_team_position', function (Blueprint $table) {
            $table->id('team_positionId');
            $table->string('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cl_church');
        Schema::dropIfExists('cl_members');
        Schema::dropIfExists('cl_clubs');
        Schema::dropIfExists('cl_club_types');
        Schema::dropIfExists('cl_club_status');
        Schema::dropIfExists('cl_directive');
        Schema::dropIfExists('cl_progressive_classes');
        Schema::dropIfExists('cl_roll_call');
        Schema::dropIfExists('cl_team_position');
        Schema::dropIfExists('cl_teams');
    }
};
