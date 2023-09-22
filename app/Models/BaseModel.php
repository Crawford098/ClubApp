<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BaseModel extends Model
{
    protected $table                = '';
    protected $db;
    const CREATED_AT                = 'creation_date';
    const UPDATED_AT                = 'updated_date';

    public function __construct(array $attributes = [])
    {
        parent::__construct();

        $this->table                = $attributes['table'];
        $this->db                   = new DB();
    }


    public function get() : object|array
    {
        return $this->db::table("$this->table")->get();
    }

    public function getBy($param = []) : object|array
    {
        $query                      = $this->db::table("$this->table");
        $return                     = "get";

        if (isset($param['where']))
        {
            $query                  = $query->where($param['where']);
        }

        if (isset($param['whereIn']))
        {
            $key                    = array_key_first($param['whereIn']);
            $values                 = $param['whereIn'][$key];
            $query                  = $query->whereIn($key, $values);
        }

        if (isset($param['single']))
        {
            $return = "first";
        }

        return $query->$return();
    }

    public function getColumnBy($param = []) : object|array
    {
        $query                      = $this->db::table("$this->table");
        $return                     = "get";

        if (isset($param['columns']))
        {
            $query                  = $query->select($param['columns']);
        }

        if (isset($param['where']))
        {
            $query                  = $query->where($param['where']);
        }

        if (isset($param['whereIn']))
        {
            $key                    = array_key_first($param['whereIn']);
            $values                 = $param['whereIn'][$key];
            $query                  = $query->whereIn($key, $values);
        }

        if (isset($param['single']))
        {
            $return = "first";
        }

        if (isset($param['returnType']) && !empty($param['returnType']))
        {
            $returnType             = $param['returnType'];
            return $query->$return()->$returnType();
        }

        return $query->$return();
    }
}
