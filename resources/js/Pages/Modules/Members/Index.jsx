import {Link} from '@inertiajs/react';
import Template from '@/Layouts/Template';
import SearchIcon from '@rsuite/icons/Search';
import { Input, InputGroup } from 'rsuite';
import PrimaryButton from "@/Components/PrimaryButton";
import {FatButton} from "@/Components/UIComponents/Buttons/FlatButtom";

const Index = () => {

    const styles = {
        width: "300px",
        margin: "0px 24px"
    }

    return(
        <Template>
            <div className="header flex w-full justify-between">
                <div>
                    <h2>Members</h2>
                </div>
                <div>
                    <InputGroup style={styles}>
                        <Input placeholder="placeholder"/>
                        <InputGroup.Addon>
                            <SearchIcon />
                        </InputGroup.Addon>
                    </InputGroup>
                    <FatButton/>
                </div>
            </div>

            <div className={"content-body"}>

                <h1>Content...</h1>
            </div>
        </Template>
    );
}
export default Index;
