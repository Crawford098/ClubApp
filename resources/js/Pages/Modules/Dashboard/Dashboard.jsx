import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Template from '@/Layouts/Template';
import { Head } from '@inertiajs/react';
import { Input } from 'antd';

export default function Dashboard(props) {
    return (
        <Template
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12" data-source="resources/js/Layouts/Navigation.jsx">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </Template>
    );
}
