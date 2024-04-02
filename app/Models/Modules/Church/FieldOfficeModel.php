<?php namespace App\Models\Modules\Church;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class FieldOfficeModel extends Model
{
    protected $table          = 'ai_field_offices';
    protected $primaryKey     = 'field_officeId';
    protected $fillable       = ['typeId', 'parentId', 'code', 'level', 'name', 'description', 'phone', 'email',
                                'address_1', 'address_2', 'city', 'state', 'country', 'postal', 'hidden', 'status'
    ];

    public function getFieldOfficeData (int $field_officeId) : object
    {
        return DB::table("ai_field_offices")->where("field_officeId", $field_officeId)->first();
    }
}

