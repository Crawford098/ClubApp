<?php namespace App\Modules\Auth\Models;

use App\Models\BaseModel;

class UserModel extends BaseModel
{
    protected $table                = 'cl_users';
    protected $primaryKey           = 'userId';
    public $incrementing            = true;
    protected $fillable             = [
        'userId',
        'username',
        'email',
        'password',
    ];

    public function __construct(array $attributes = [])
    {
        $attributes['table']        = $this->table;
        parent::__construct($attributes);
    }
}
