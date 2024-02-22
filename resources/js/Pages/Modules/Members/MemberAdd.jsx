import Template from "@/Layouts/Template";
import { Card, Form, Input, Flex, Button } from "antd";

const MemberAdd = () => {

    const handleSubmit = (event) => {

        console.log(1312);
        console.log(event);

        
    }

    return (
        <Template>
            <Card>
                <h3>MemberAdd</h3>
                <Form name="basic" onFinish={handleSubmit}>
                    <Flex style={content}>
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your lastName!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                    </Flex>
                    <Button htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </Template>
    );
};

const content = {
    padding: "20px 16px",
};
export default MemberAdd;
