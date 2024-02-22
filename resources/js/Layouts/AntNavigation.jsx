import React, { useState } from "react";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu, Flex } from "antd";
import { Link } from "@inertiajs/react";

function getItem(label, key, icon, children, type, link) {
    return {
        key,
        icon,
        children,
        label,
        type,
        link,
    };
}

const items = [
    getItem("Dashboard", "1", <PieChartOutlined />, null, "item", "dashboard"),
    getItem("Members", "2", <DesktopOutlined />, null, "item", "members"),
    getItem("Units", "3", <ContainerOutlined />, null, "item", "units"),
    getItem("Calendar", "sub1", <MailOutlined />, null, "item", "calendar"),
    getItem("Treasury", "sub2", <AppstoreOutlined />, null, "item", "treasury"),
];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = (link) => {
        // Use Inertia's history object to navigate
        history.push(link);
    };

    const renderMenuItem = (item) => {
        if (item.type === "item") {
            return (
                <Menu.Item key={item.key} icon={item.icon}>
                    <Link href={route(item.link)}>{item.label} </Link>
                </Menu.Item>
            );
        } else if (item.type === "submenu") {
            return (
                <Menu.SubMenu
                    key={item.key}
                    icon={item.icon}
                    title={item.label}
                >
                    {item.children.map((child) => renderMenuItem(child))}
                </Menu.SubMenu>
            );
        }
    };

    return (
        <div
            style={{
                width: 256,
            }}
        >
            <Flex gap="middle" align="start" vertical style={navHeader}>
                <Flex style={{ width: "100%" }}>
                    <PieChartOutlined style={logoStyle} />
                    <div style={infoHeader}>
                        <p>Linaje Real</p>
                        <small>Guias Mayores</small>
                    </div>
                </Flex>
            </Flex>
            <div>
                <Menu
                    className="min-h-[100vh]"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                >
                    {items.map((item) => renderMenuItem(item))}
                </Menu>
            </div>
        </div>
    );
};

const navHeader = {
    backgroundColor: "#001529",
    color: "#f0ffff",
    padding: "10px 0",
};

const logoStyle = {
    fontSize: 50,
    display: "flex",
    justifyItems: "center",
    padding: "12px 0 12px 24px",
};

const infoHeader = {
    justifyItems: "start",
    padding: "12px 10px",
};
export default App;
