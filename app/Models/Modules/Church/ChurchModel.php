<?php namespace App\Models\Modules\Church;

use Illuminate\Database\Eloquent\Model;

class ChurchModel extends Model
{
    protected $table          = 'cl_church';
    protected $primaryKey     = 'churchId';
    protected $fillable       = ['field_officeId', 'districtId', 'zoneId', 'name', 'address', 'hidden'];

}
