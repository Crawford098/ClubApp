import Template from "@/Layouts/Template";
import { Card, Form, Input, Flex, Button, DatePicker} from "antd";
import { Insert } from "@/Request/Request";
import Icon, { CloseCircleOutlined } from '@ant-design/icons';
import imagen from '../../../../assets/images/PathFinder.png';

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
                    <CloseCircleOutlined style={{fontSize: '24px'}} />
                </Flex>

                <Form name="basic" onFinish={handleSubmit}>
                    <Flex style={content}>
                        <div style={logoDiv}>
                            <img src={imagen} alt="logo"/>
                        </div>
                        <div style={personalInfo}>
                            <Form.Item name="name" rules={[{required: true, message: "Please input your name!"}]}>
                                <Input placeholder="Basic usage" />
                            </Form.Item>

                            <Form.Item name="lastName" rules={[{required: true, message: "Please input your lastName!"}]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="birthdate" rules={[{required: true, message: "Please input your lastName!"}]}>
                                <DatePicker onChange={()=>{}} />
                            </Form.Item>

                            <Form.Item name="lastName" rules={[{required: true, message: "Please input your lastName!"}]}>
                                <Input />
                            </Form.Item>
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
export default MemberAdd;
