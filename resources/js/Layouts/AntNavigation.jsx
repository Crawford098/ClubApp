import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu, Flex } from 'antd';

function getItem(label, key, icon, children, type, link) {
    return {
        key,
        icon,
        children,
        label,
        type,
        link
    };
}

const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Members', '2', <DesktopOutlined />),
    getItem('Units', '3', <ContainerOutlined />),
    getItem('Calendar', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Treasury', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            style={{
                width: 256,
            }}
        >
            <Flex gap="middle" align="start" vertical style={navHeader}>
                <Flex style={{ width: '100%' }}>
                    <PieChartOutlined style={logoStyle} />
                    <div style={infoHeader}>
                        <p>Linaje Real</p>
                        <small>Guias Mayores</small>
                    </div>

                </Flex>
            </Flex>
            <div>

                <Menu
                    className='min-h-[100vh]'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </div>

        </div>
    );
};

const navHeader = { 
    backgroundColor: '#001529', 
    color: '#f0ffff',
    padding: '10px 0'
}

const logoStyle = {
    fontSize: 50,
    display: 'flex',
    justifyItems: 'center',
    padding: '12px 0 12px 24px'
}

const infoHeader = {
    justifyItems: 'start',
    padding: '12px 10px',
}
export default App;