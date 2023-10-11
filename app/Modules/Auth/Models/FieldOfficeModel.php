<?php namespace App\Modules\Auth\Models;

use App\Models\BaseModel;

class FieldOfficeModel extends BaseModel
{

    protected $table                = 'ai_field_offices';
    protected $primaryKey           = 'field_officeId';
    public $incrementing            = true;
    const CREATED_AT                = 'creation_date';
    const UPDATED_AT                = 'updated_date';

   public function __construct(array $attributes = [])
   {
       $attributes['table']         = $this->table;
       parent::__construct($attributes);
   }

}
