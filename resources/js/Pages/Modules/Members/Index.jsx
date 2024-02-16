import Template from '@/Layouts/Template';
import { Input, InputGroup } from 'rsuite';
import PrimaryButton from "@/Components/PrimaryButton";
import style from '../../../../css/Modules/members.module.css';
import { useState } from 'react';
import {Link} from '@inertiajs/react';
import UITable from '@/Components/UIComponents/Tables/UITable';
import { router } from '@inertiajs/react'

const Index = ({tableData, columns}) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [autoHeight, setAutoHeight] = useState(true);
    const styles = {
        width: "300px",
        margin: "0px 24px"
    }

    //Functions
    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const datatableData = () => {
        return {
            'tableData'   : tableData,
            'columns'     : columns
        }
    };

    console.log();

    // const data = [{
    //     memberId: 1,
    //     first_name: 'Jonathan',
    //     last_name: 'Santana',
    //     phone: 'Santo Domingo',
    //     email: 'prueba@prueba.com',
    // },
    // {
    //     memberId: 2,
    //     first_name: 'Elianny',
    //     last_name: 'Luciano',
    //     phone: 'Santo Domingo',
    //     email: 'prueba2@prueba.com',
    // },
    // ]

    return(
        <Template>
            <div className="header flex w-full justify-between">
                <div>
                    <h2>Members</h2>
                </div>
            </div>

            <div className={"content-body " + style.filterContainer}>
                <div className="flex justify-end">
                    <InputGroup style={styles} size={'md'}>
                        <Input placeholder="Buscar"/>
                    </InputGroup>

                    <Link href={route('addMember')}>
                        <PrimaryButton>New</PrimaryButton>
                    </Link>
                </div>
            </div>

            <UITable data={[tableData, columns]}/>
        </Template>
    );
}
export default Index;
