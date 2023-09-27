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
            'columns' => ['field_officeId','code','typeId','parentId','name', 'level'],
            'whereIn' => ['typeId' => [4,5,6]]
        ]);

        $result = $this->getChurchDropdown( $this->objectToArray($data), 4);

        dd($result);

        return Inertia::render('Auth/Register', [
            'churchesData' => $this->fieldOfficeModel->getColumnBy(['columns' => '',  'whereIn' => ['typeId' => [4,5,6]]])
        ]);
    }

    //TODO: Pasarlo a un helper
    public function getChurchDropdown(array $data, int $level = 0, $parentId = 0) : array
    {
        $result = [];

        foreach ($data as $key => $value)
        {
            $conditional = ($parentId && $parentId == $value['parentId'] || $parentId == 0);

            if ($level == $value['level'] && ($parentId == 0 || $parentId == $value['parentId']))
            {
                $result[$value['field_officeId']]['value']       = $value['field_officeId'];
                $result[$value['field_officeId']]['label']       = $value['name'];
                $result[$value['field_officeId']]['children']    = $this->getChurchDropdown( $data, $level++, $value['field_officeId']);
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
