import React from 'react';

function MySelect({options,value,onChange,defaultValue}) {
    return (
        <select value={value} onChange={e=>onChange(e.target.value)} className="form-select w-50">
            <option disabled>{defaultValue}</option>
            {options.map(item=>(
                <option key={item.value} value={item.value}>{item.nomi}</option>
            ))}
        </select>
    );
}

export default MySelect;

