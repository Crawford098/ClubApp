import Template from "@/Layouts/Template";
import { Card, Form, Flex, Button, DatePicker } from "antd";
import { Input as AntInput } from 'antd';
import { Insert } from "@/Request/Request";
import Icon, { CloseCircleOutlined } from '@ant-design/icons';
import imagen from '../../../../assets/images/PathFinder.png';
import SelectPicker from '../../../Components/UIComponents/AntSelect/SelectPicker';

const MemberAdd = () => {
    // useEffect(() => {
    //     return () => {
    //         // Código de limpieza que se ejecuta cuando el componente se desmonta o cuando cambian las dependencias
    //         // Similar a lo que se haría en componentWillUnmount
    //     };
    // }, []);

    const handleSubmit = async (data) => {
        const response = await Insert('members/insert', data);
    };

    return (
        <Template>
            <Card>
                <Flex justify={'space-between'}>
                    <h3>MemberAdd</h3>
                    <CloseCircleOutlined style={{ fontSize: '24px' }} />
                </Flex>

                <Form name="basic" onFinish={handleSubmit}>
                    <Flex style={content}>
                        <div style={logoDiv}>
                            <img src={imagen} alt="logo" />
                        </div>
                        <div style={personalInfo}>

                            <div style={formGroup}>
                                <label>Name</label>
                                <Form.Item name="name" rules={[{ required: true, message: "Please input your name" }]}>

                                    <AntInput placeholder="Basic usage" />
                                </Form.Item>
                            </div>

                            <div style={formGroup}>
                                <label>Name</label>
                                <Form.Item name="name" rules={[{ required: true, message: "Please input your name" }]}>

                                    <AntInput placeholder="Basic usage" />
                                </Form.Item>
                            </div>

                            <div style={formGroup}>
                                <label>LastName</label>
                                <Form.Item name="lastName" rules={[{ required: true, message: "Please input your lastName" }]}>

                                    <AntInput />
                                </Form.Item>
                            </div>

                            <div style={formGroup}>
                                <label>Class Progresive</label>
                                <Form.Item name="class" rules={[{ required: true, message: "Select an option" }]}>

                                    <SelectPicker data={[
                                        {
                                            value: 'jack',
                                            label: 'Jack',
                                        },
                                        {
                                            value: 'lucy',
                                            label: 'Lucy',
                                        },
                                        {
                                            value: 'tom',
                                            label: 'Tom',
                                        },
                                    ]} />
                                </Form.Item>
                            </div>

                            <div style={formGroup}>
                                <Form.Item name="birthdate" rules={[{ required: true, message: "Please input your lastName!" }]}>
                                    <DatePicker onChange={() => { }} />
                                </Form.Item>
                            </div>
                        </div>
                    </Flex>
                    <Button htmlType="submit">Submit</Button>
                </Form>
            </Card>
        </Template>
    );
};

const content = {
    padding: "20px 16px",
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
    width: '100%'
}
export default MemberAdd;
