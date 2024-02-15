import { Table, Pagination} from 'rsuite';
import { useState } from 'react';
const { Column, HeaderCell, Cell } = Table;

const UITable = ({data}) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [autoHeight, setAutoHeight] = useState(true);

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div>
            <Table height={420} data={data} autoHeight={autoHeight}
                   affixHeader affixHorizontalScrollbar>

                {columns.map((columnName, index) => (
                    <Column key={index} width="100%" sortable resizable>
                        <HeaderCell>{columnName}</HeaderCell>
                        <Cell dataKey={columnName} />
                    </Column>
                ))}
            </Table>
            <div style={{ padding: 20 }}>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={data.length}
                    limitOptions={[7, 20, 30]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                />
            </div>
        </div>
    );
}

export default UITable;
