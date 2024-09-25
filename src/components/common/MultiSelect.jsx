import React from 'react';
import { useField, useFormikContext } from 'formik';
import MultiSelect from 'multiselect-react-dropdown';
import { SinHala } from '../../app/font';

const MultiSelectFormik = ({ name, options, initialValues, ...props }) => {

    const { setFieldValue, values } = useFormikContext();

    const handleSelect = (selectedList) => {
        setFieldValue(name, selectedList.map((item, i) => {
            return (
                {
                    item: item.name,
                    id: item.id
                }
            )
        }));
    };

    const handleRemove = (selectedList) => {
        setFieldValue(name, selectedList.map((item, i) => {
            return (
                item.name
            )
        }));
    };



    return (
        <MultiSelect
            options={options}
            selectedValues={options?.filter(option => values[name]?.includes(option?.value))}
            onSelect={handleSelect}
            onRemove={handleRemove}
            displayValue='name'
            showCheckbox
            placeholder='SELECT PROPERTY *'
            className={`custom-checkbox ${SinHala.className}`}
            {...props}
        />
    );
};

export default MultiSelectFormik;

