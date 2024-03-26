<?php namespace App\Models\Members;

use Illuminate\Database\Eloquent\Model;

class MembersModel extends Model
{
    protected $table                                = 'cl_members';
    protected $primaryKey                           = 'memberId';
    protected $fillable                             = ['clubId', 'teamId', 'classId', 'club_types', 'first_name',
                                                        'last_name', 'email', 'phone', 'address', 'baptized',
                                                        'date_of_birth', 'baptism_date', 'directive_positionId',
                                                        'team_positionId', 'hidden'];
}
