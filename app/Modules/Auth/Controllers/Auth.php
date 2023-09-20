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


//        foreach ($data as $key => $value)
//        {
//            $newData[$value['value']]       = $value['code'];
//            $newData[$value['label']]       = $value['name'];
//            $newData[$value['children']]    = $value['name'];
//        }
//        $newData = $this->getChurchDropdown();


        return Inertia::render('Auth/Register', [
            'churchesData' => $this->fieldOfficeModel->getColumnBy(['columns' => '',  'whereIn' => ['typeId' => [4,5,6]]])
        ]);
    }

}
