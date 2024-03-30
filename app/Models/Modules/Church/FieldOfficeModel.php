<?php namespace App\Models\Modules\Church;

use Illuminate\Database\Eloquent\Model;

class FieldOfficeModel extends Model
{
    protected $table          = 'ai_field_offices';
    protected $primaryKey     = 'field_officeId';
    protected $fillable       = ['typeId', 'parentId', 'code', 'level', 'name', 'description', 'phone', 'email',
                                'address_1', 'address_2', 'city', 'state', 'country', 'postal', 'hidden', 'status'
    ];

    public function getFieldOfficeData () : array
    {
        return $this->statement("Select * from ai_field_offices")->getArray();
    }
}
