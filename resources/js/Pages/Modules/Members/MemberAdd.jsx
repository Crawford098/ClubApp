import Template from "@/Layouts/Template";
import { Card, Form, Input, Flex } from "antd";

const MemberAdd = () => {
    return (
        <Template>
            <Card>
                <h3>MemberAdd</h3>
                <Form>
                    <Flex style={content}>
                        <Input placeholder="Name" />
                        <Input placeholder="Lastname" />;
                    </Flex>
                </Form>
            </Card>
        </Template>
    );
};

const content = {
    padding: "20px 16px",
};
export default MemberAdd;
