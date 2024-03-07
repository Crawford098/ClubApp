import { Select } from 'antd';

const SelectPicker = ({data}) => {

    return (
        <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            options={data}
        />
    );
}

export default SelectPicker;