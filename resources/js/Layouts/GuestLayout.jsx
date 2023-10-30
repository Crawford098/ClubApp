import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import img from '/resources/assets/images/Prueba Poligono.png';
import bg from '/resources/assets/images/ChurchRegister.svg'

export default function Guest({ children, baseUrl, pageName }) {

    const style = (pageName !== undefined && pageName === 'login') ? 'mt-24' : 'mt-20';
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="flex flex-row justify-between">
                <div className="">
                    <img src={bg} alt="bg"/>
                </div>
                <div className="w-full h-screen flex flex-row justify-end bg-figure">
                    <div className="w-full sm:max-w-md  px-6 py-4 justify-end content-c    enter mr-32">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
