import React from 'react';

function TableHeader(props) {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>Age</th>
                <th>Job</th>
                <th>Delete</th>
            </tr>
        </thead>
    );
}

export default TableHeader;