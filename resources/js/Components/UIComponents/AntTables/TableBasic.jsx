import { Space, Table, Tag } from 'antd';

const TableBasic = ({tableData, columns}) => <Table columns={columns} dataSource={tableData} />

export default TableBasic;