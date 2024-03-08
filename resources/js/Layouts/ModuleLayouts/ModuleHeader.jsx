import { Flex, Divider } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const ModuleHeader = ({ title }) => {
    return (
        <>
            <Flex justify={'space-between'}>
                <h3>{title}</h3>
                <CloseCircleOutlined style={{ fontSize: '24px' }} />
            </Flex>
            <Divider />
        </>
    )
}

export default ModuleHeader;