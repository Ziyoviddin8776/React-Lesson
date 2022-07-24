import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/Select/MySelect";

function SortUsers({filter,setFilter}) {
    return (
        <div className="d-flex my-3">
            <MyInput
                value={filter.query}
                onChange={e=>setFilter({...filter,query:e.target.value})}
                className="form-control w-50"
                placeholder="Sorted firstName"
            />
            <MySelect
                defaultValue={"Sorted By"}
                value={filter.sort}
                onChange={selected=>setFilter({...filter,sort:selected})}
                options={[
                    {nomi:"FirstName",value:"firstName"},
                    {nomi:"Job",value:"job"}
                ]}
            />
        </div>
    );
}

export default SortUsers;