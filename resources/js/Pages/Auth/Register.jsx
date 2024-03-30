import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { TreeSelect, Select, Flex } from 'antd';

export default function Register({churchesData, disableItemValue, clubTypes}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        churchId: '',
        clubIds: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    const setClubArrayData = (values) => {
        let valueArray = [];
        values.forEach(value => {
            valueArray.push(value);
        });
        setData('clubIds', valueArray);

        return valueArray;
    }

    return (
        <GuestLayout pageName={'Register'}>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="my-6">
                    <h2>Register Your Church</h2>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="churchId" value="Church Name" />
                    <TreeSelect
                        size={"large"}
                        treeData={churchesData}
                        allowClear
                        treeDefaultExpandAll
                        placeholder="Select an option"
                        name='churchId'
                        style={{ width: '100%' }}
                        onChange={(values)=> {
                            setData("churchId", values);
                        }}
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="Clubs" value="Select Clubs" />
                    <Select
                        mode="multiple"
                        name="clubs"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Select an option"
                        onChange={setClubArrayData}
                        options={clubTypes}
                        size="large"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="username" value="Username" />

                    <TextInput
                        id="username"
                        type="text"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
