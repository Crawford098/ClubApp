<?php namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Modules\Church\FieldOfficeModel;
use App\Models\User;
use App\Models\Modules\Church\ChurchModel;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $fieldOffice = new FieldOfficeModel();

        //Todo: Guardar iglesia...
        $request->validate([
            'churchId' => 'required|numeric'
        ]);

        $fieldOfficeData = $fieldOffice->getFieldOfficeData($request->churchId);

        $church = ChurchModel::create([
            "field_officeId"    => $request->churchId,
            "districtId"        => $fieldOfficeData->parentId,
            "name"              => $fieldOfficeData->name,
            "address"           => $fieldOfficeData->address_1,
            "hidden"            => 0
        ]);

        if ($church)
        {
            //Todo: Guardar club....

            //Todo: Guardando usuario
            $request->validate([
                'username' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:'.User::class,
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ]);

            $user = User::create([
                'username'      => $request->username,
                'email'         => $request->email,
                'password'      => Hash::make($request->password),
                'churchId'      => $request->churchId,
                'created_date'  => date('Y-m-d')
            ]);

            event(new Registered($user));

            Auth::login($user);
        }

        return redirect(RouteServiceProvider::HOME);
    }
}
