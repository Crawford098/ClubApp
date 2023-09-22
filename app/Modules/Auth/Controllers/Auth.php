<?php namespace App\Modules\Auth\Controllers;

use App\Modules\Auth\Models\FieldOfficeModel;
use Inertia\Inertia;

class Auth
{
    private $fieldOfficeModel;

    public function __construct()
    {
        //Models
        $this->fieldOfficeModel = new FieldOfficeModel();
    }

    public function register()
    {
        $data = $this->fieldOfficeModel->getColumnBy([
            'columns'       => ['field_officeId','code','typeId','parentId','name', 'level'],
            'whereIn'       => ['typeId' => [4,5,6]]
        ]);

//        dd(($this->objectToArray($data)));
        dd($this->getChurchDropdown($this->objectToArray($data), 4));

        return Inertia::render('Auth/Register', [
            'churchesData' => $this->fieldOfficeModel->getColumnBy(['columns' => '',  'whereIn' => ['typeId' => [4,5,6]]])
        ]);
    }


    //TODO: Pasarlo a un helper
    public function getChurchDropdown(array $data, int $level = 0, $parent = false) : array
    {
        $result = [];

        foreach ($data as $key => $value)
        {
            $parentCondition = $parent && $parent == $value['parent'];

            if ($value['level'] == $level && $parentCondition)
            {
                $result[$value['value']]       = $value['field_officeId'];
                $result[$value['label']]       = $value['name'];
                $result[$value['children']]    = $this->getChurchDropdown($data, $level++, $value['field_officeId']);
            }
        }

        return $result;
    }

    //TODO: Pasarlo a un helper
    public function objectToArray($object)
    {
        if (is_object($object))
        {
            $array = [];
            foreach ($object as $key => $value)
            {
                $array[$key] = $this->objectToArray($value);
            }
            return $array;
        }
        elseif (is_array($object))
        {
            return array_map('objectToArray', $object);
        }
        else
        {
            return $object;
        }
    }

}
