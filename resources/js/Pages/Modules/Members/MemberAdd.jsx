import Template from "@/Layouts/Template";
import { Card, Form, Flex, Button, DatePicker, Breadcrumb } from "antd";
import { Input as AntInput } from 'antd';
import { Insert } from "@/Request/Request";
import { Link } from '@inertiajs/react';
import imagen from '../../../../assets/images/PathFinder.png';
import SelectPicker from '../../../Components/UIComponents/AntSelect/SelectPicker';
import ModuleHeader from '@/Layouts/ModuleLayouts/ModuleHeader';
import UploadAvatar from '@/Components/UIComponents/AntUpload/UploadAvatar';
import style from '../../../../css/Modules/members.module.css';
import { useState } from "react";


//Todo: Cambiar los estilos de "style" a "className"
// agregar los estilos a members.css.

const MemberAdd = () => {
    // useEffect(() => {
    //     return () => {
    //         // Código de limpieza que se ejecuta cuando el componente se desmonta o cuando cambian las dependencias
    //         // Similar a lo que se haría en componentWillUnmount
    //     };
    // }, []);

    const [isBaptized, setIsBaptized] = useState(false);
    const handleSubmit = async (data) => {
        const response = await Insert('members/insert', data);
    };

    const baptized = (baptized) => {
        setIsBaptized(!baptized);
    }

    //Todo: Buscar desde la base de datos estos datos. {
    const breadCrumb = [
        {
            title: 'Home',
        },
        {
            title: <Link href={route('members')}>Member</Link>,
        },
        {
            title: 'Add Member',
        },
    ];

    const bloodType = [
        {
            value: '1',
            label: 'A+',
        },
        {
            value: '2',
            label: 'O+',
        },
        {
            value: '3',
            label: 'O-',
        },
    ];

    const religion = [
        {
            value: 1,
            label: 'Adventista',
        },
        {
            value: 2,
            label: 'Evangelico',
        },
        {
            value: 3,
            label: 'Católico',
        },
    ];
    //Todo: }

    return (
        <Template>
            <Breadcrumb items={breadCrumb} style={{ padding: '20px 10px' }} />
            <Card>
                <ModuleHeader title={'Agregar miembros'} />
                <Form name="basic" onFinish={handleSubmit}>
                    <Flex style={content}>

                        <div style={{ paddingBottom: '30px' }}><h2>Datos Personales</h2></div>
                        <UploadAvatar />
                        <Flex>
                            <div style={formGroup}>
                                <label>Name</label>
                                <Form.Item name="name" rules={[{ required: true, message: "Please input your name" }]}>
                                    <AntInput placeholder="Basic usage" />
                                </Form.Item>
                            </div>

                            <div style={formGroup}>
                                <label>Lastname</label>
                                <Form.Item name="lastname" rules={[{ required: true, message: "Please input your Lastname" }]}>
                                    <AntInput placeholder="Basic usage" />
                                </Form.Item>
                            </div>
                        </Flex>

                        <Flex>
                            <div style={formGroup}>
                                <label>Número de cédula</label>
                                <Form.Item name="document" rules={[{ required: true, message: "Please input your Document number" }]}>

                                    <AntInput placeholder="Basic usage" />
                                </Form.Item>
                            </div>

                            <div style={formGroup}>
                                <label>birthdate</label>
                                <Form.Item name="birthdate" rules={[{ required: true, message: "Please input your Birdday!" }]}>
                                    <DatePicker onChange={() => { }} />
                                </Form.Item>
                            </div>
                        </Flex>

                        <Flex>
                            <div style={formGroup}>
                                <label>Tipo de sangre</label>
                                <Form.Item name="name" rules={[{ required: true, message: "Please select your bood type" }]}>
                                    <SelectPicker data={bloodType} />
                                </Form.Item>
                            </div>

                            <div style={formGroup}>
                                <label>Seguro médico</label>
                                <Form.Item name="lastname" rules={[{ required: true, message: "Please input your Health insurance" }]}>
                                    <AntInput placeholder="Basic usage" />
                                </Form.Item>
                            </div>
                        </Flex>

                        <Flex>
                            <div style={formGroup}>
                                <label>Dirección</label>
                                <Form.Item name="lastName" rules={[{ required: true, message: "Please input your Direction" }]}>
                                    <AntInput />
                                </Form.Item>
                            </div>
                            <div style={formGroup}>
                                <label>Sector</label>
                                <Form.Item name="lastName" rules={[{ required: true, message: "Please input your Sector" }]}>
                                    <AntInput />
                                </Form.Item>
                            </div>
                        </Flex>

                        <Flex>
                            <div style={formGroup}>
                                <label>Escuela</label>
                                <Form.Item name="schoolName" rules={[{ required: true, message: 'Please niput your School' }]}>
                                    <AntInput placeholder="Escuela" />
                                </Form.Item>
                            </div>

                            <div style={formGroup}>
                                <label>Año</label>
                                <Form.Item name="year" rules={[{ required: true, message: 'Please niput your School' }]}>
                                    <AntInput placeholder="Año" />
                                </Form.Item>
                            </div>
                        </Flex>

                        <Flex>
                            <div style={formGroup}>
                                <label>Religión</label>
                                <Form.Item name="religion" rules={[{ required: true, message: "Select an option" }]}>
                                    <SelectPicker data={religion} />
                                </Form.Item>
                            </div>

                            <div style={formGroup}>
                                <label>Bautizado</label>
                                <Form.Item name="religion" rules={[{ required: true, message: "Select an option" }]}>
                                    {isBaptized ? <DatePicker /> : ''}
                                </Form.Item>
                            </div>
                        </Flex>

                        <div style={{ title }}><h2>Padres o Tutores responsables</h2></div>

                        <div>
                            <Button htmlType="submit">Submit</Button>
                        </div>
                    </Flex>
                </Form>
            </Card>
        </Template>
    );
};

const title = {
    paddingBottom: '30px'
}

const content = {
    padding: "20px 16px",
    margin: "0 250px",
    flexDirection: 'column'
};

const logoDiv = {
    border: '1px solid black',
    paddingBottom: '12px'
}

const personalInfo = {
    width: '100%',
    padding: '0px 20px'
}

const formGroup = {
    padding: '0 20px',
    width: '100%'
}

export default MemberAdd;
