<?php namespace App\Modules\Auth\Models;

use App\Models\BaseModel;

class UserModel extends BaseModel
{
    protected $table                = 'cl_users';
    protected $primaryKey           = 'userId';
    public $incrementing            = true;
    const CREATED_AT                = 'created_at';
    const UPDATED_AT                = 'updated_at';
    protected $fillable             = ['userId', 'churchId', 'username', 'email', 'password', 'created_date'];

    public function __construct(array $attributes = [])
    {
        $attributes['table']        = $this->table;
        parent::__construct($attributes);
    }
}
