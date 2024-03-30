<?php namespace App\Models\Modules\Clubs;

use Illuminate\Database\Eloquent\Model;

class ClubTypesModel extends Model
{
    protected $table                                = 'cl_club_types';
    protected $primaryKey                           = 'typeId';
    protected $fillable                             = ['name', 'key'];

    public function selectData() : array
    {
        $clubTypes = $this->all();
        $clubTypeData = [];

        foreach ($clubTypes as $key => $row)
        {
            $clubTypeData[$key]['label'] = $row->name;
            $clubTypeData[$key]['value'] = $row->typeId;
        }

        return $clubTypeData;
    }
}
