import Template from '@/Layouts/Template';
import { Input, InputGroup } from 'rsuite';
import PrimaryButton from "@/Components/PrimaryButton";
import style from '../../../../css/Modules/members.module.css';
import { Link } from '@inertiajs/react';
import TableBasic from '@/Components/UIComponents/AntTables/TableBasic';
import { Card, Divider } from 'antd';

const Index = ({ tableData }) => {
    const styles = {
        width: "300px",
        margin: "0px 24px"
    }

    const tableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Telefono',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    return (
        <Template>
            <Card bordered={false}>
                <div className="header flex w-full justify-between">
                    <div>
                        <h3>Members</h3>
                    </div>

                    <div className={"content-body " + style.filterContainer}>
                        <div className="flex justify-end">
                            <InputGroup style={styles} size={'md'}>
                                <Input placeholder="Buscar" />
                            </InputGroup>

                            <Link href={route('addMember')}>
                                <PrimaryButton>New</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
                <TableBasic tableData={tableData} columns={tableColumns} />
            </Card>
        </Template>
    );
}
export default Index;
