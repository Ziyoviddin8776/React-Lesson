import React from 'react';
import MyButton from "../UI/Button/MyButton";

function TableBody(props) {
    return (
        <tbody>
        {
            props.users.map((val,index)=>(
                <tr key={val.id}>
                    <td>{index+1}</td>
                    <td>{val.firstName}</td>
                    <td>{val.age}</td>
                    <td>{val.job}</td>
                    <td>
                        <MyButton onClick={()=>props.removeUser(val)} className="btn btn-danger">Delete</MyButton>
                    </td>
                </tr>
            ))
        }

        </tbody>
    );
}

export default TableBody;