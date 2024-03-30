<?php namespace App\Modules\Auth\Controllers;

use App\Models\Modules\Clubs\ClubTypesModel;
use App\Modules\Auth\Models\FieldOfficeModel;
use Inertia\Inertia;
use Illuminate\Http\Request;

class Auth
{
    //Models
    private FieldOfficeModel $fieldOfficeModel;

    public function __construct()
    {
        //Models
        $this->fieldOfficeModel = new FieldOfficeModel();
    }

    public function index(): \Inertia\Response
    {
        $clubTypes = new ClubTypesModel();

        $data = $this->fieldOfficeModel->getColumnBy([
            'columns' => ['field_officeId','code','typeId','parentId','name', 'level'],
            'whereIn' => ['typeId' => [4,5,6]],
            'where'   => ['hidden' => 0]
        ]);

//        dd($clubTypes->selectData());

        return Inertia::render('Auth/Register', [
            'churchesData'      => $this->getChurchDropdown($this->objectToArray($data), 4),
            'disableItemValue'  => $this->itemsDisable($data),
            'clubTypes'         => $clubTypes->selectData()
        ]);
    }

    //TODO: Pasarlo a un helper
    public function getChurchDropdown(array $data, int $level = 0, $parentId = 0) : array
    {
        $result     = [];
        $counter    = 0;

        foreach ($data as $key => $value)
        {
            if ($level == $value['level'] && ($parentId == 0 || $parentId == $value['parentId']))
            {
                $result[$counter]['value']       = $value['field_officeId'];
                $result[$counter]['title']       = $value['name'];
                $result[$counter]['children']    = $this->getChurchDropdown($data, $level+1, $value['field_officeId']);

                if (empty($result[$counter]['children']))
                {
                    unset($result[$counter]['children']);
                }
                else
                {
                    //If not empty meaning is a parent row, therefore is a disable option.
                    $result[$counter]['disabled']    = true;
                }
                $counter++;
            }
        }

        return $result;
    }

    public function itemsDisable(object $data) : array
    {
        $disableArray = [];

        foreach ($data as $value)
        {
            if (in_array($value->typeId, [4,5]))
            {
                $disableArray[] = $value->field_officeId;
            }
        }

        return $disableArray;
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
