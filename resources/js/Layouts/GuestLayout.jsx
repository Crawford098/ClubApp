import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import img from '/resources/assets/images/Prueba Poligono.png';
import bg from '/resources/assets/images/ChurchRegister.svg'

export default function Guest({ children, baseUrl, pageName }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center pt-6 sm:pt-0 bg-gray-100">
            <div className="flex flex-row justify-between">
                <div className="square">
                    <div className={"w-full text-center py-12"}>
                        <h1 className={"text-white text-7xl"}>Welcome to club app</h1>
                    </div>

                </div>
                <div className="w-full h-screen flex flex-row justify-center scroll-is-no-space items-center mx-10">
                    <div className="w-full sm:max-w-md">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
