import {Link} from '@inertiajs/react';
import Template from '@/Layouts/Template';
import SearchIcon from '@rsuite/icons/Search';
import { Input, InputGroup, SelectPicker} from 'rsuite';
import PrimaryButton from "@/Components/PrimaryButton";
import style from '../../../../css/Modules/members.module.css';
import {FatButton} from "@/Components/UIComponents/Buttons/FlatButtom";

const Index = () => {

    const styles = {
        width: "300px",
        margin: "0px 24px"
    }

    const data = [{
        value: 1,
        label: 'Grid'
    },{
        value: 2,
        label: 'Table'
    }
    ];

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

                        <SelectPicker data={data}/>
                    </div>
                    <div className="items-center">
                        <PrimaryButton>New</PrimaryButton>
                    </div>
                </div>
            </div>
        </Template>
    );
}
export default Index;
