<?php namespace App\Modules\Auth\Models;

use App\Models\BaseModel;

class ClubModel extends BaseModel
{
    protected $table                = 'cl_clubs';
    protected $primaryKey           = 'clubId';
    public $incrementing            = true;
    const CREATED_AT                = 'created_at';
    const UPDATED_AT                = 'updated_at';
    protected $fillable             = ['clubId', 'churchId', 'name', 'typeId', 'statusId', 'date', 'hidden', 'created_date'];
    protected $hidden               = ['slogan'];

    public function __construct(array $attributes = [])
    {
        $attributes['table']        = $this->table;
        parent::__construct($attributes);
    }
}
