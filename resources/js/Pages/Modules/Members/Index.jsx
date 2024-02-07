import Template from '@/Layouts/Template';
import SearchIcon from '@rsuite/icons/Search';
import { Input, InputGroup, SelectPicker, Table, Pagination} from 'rsuite';
import PrimaryButton from "@/Components/PrimaryButton";
import style from '../../../../css/Modules/members.module.css';
const { Column, HeaderCell, Cell } = Table;
import { useState } from 'react';

const Index = () => {

    const styles = {
        width: "300px",
        margin: "0px 24px"
    }

    // const data = [{
    //     value: 1,
    //     label: 'Grid'
    // },{
    //     value: 2,
    //     label: 'Table'
    // }
    // ];

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [autoHeight, setAutoHeight] = useState(true);

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = [{
        id: 1,
        firstName: 'Jonathan',
        lastName: 'Santana',
        city: 'Santo Domingo',
        email: 'prueba@prueba.com',
    },
    {
        id: 2,
        firstName: 'Elianny',
        lastName: 'Luciano',
        city: 'Santo Domingo',
        email: 'prueba2@prueba.com',
    },
    ]

    return(
        <Template>
            <div className="header flex w-full justify-between">
                <div>
                    <h2>Members</h2>
                </div>
                <div>
                </div>
            </div>

            <div className={"content-body " + style.filterContainer}>
                <div>
                    <h3 className={style.filterTitle}>Filters:</h3>
                </div>
                <div className="flex">
                    <div className="flex w-full items-center">
                        <InputGroup style={styles}>
                            <Input placeholder="placeholder"/>
                            <InputGroup.Addon>
                                <SearchIcon />
                            </InputGroup.Addon>
                        </InputGroup>

                        {/*<SelectPicker data={data}/>*/}
                    </div>
                    <div className="items-center">
                        <PrimaryButton>New</PrimaryButton>
                    </div>
                </div>
            </div>

            <div>
                <Table height={420} data={data} autoHeight={autoHeight}
                       affixHeader affixHorizontalScrollbar>
                    <Column width={50} align="center" fixed resizable>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>

                    <Column width={100} fixed resizable>
                        <HeaderCell>First Name</HeaderCell>
                        <Cell dataKey="firstName" />
                    </Column>

                    <Column width={100} resizable>
                        <HeaderCell>Last Name</HeaderCell>
                        <Cell dataKey="lastName" />
                    </Column>

                    <Column width={200} resizable>
                        <HeaderCell>City</HeaderCell>
                        <Cell dataKey="city" />
                    </Column>
                    <Column width={200} flexGrow={1} resizable>
                        <HeaderCell>Email</HeaderCell>
                        <Cell dataKey="email" />
                    </Column>
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
        </Template>
    );
}
export default Index;
