import React from "react";
import "./style.css";

function Table(props) {
    const width = 20
    return (
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" style={{ width: 20 + "%" }}>Image</th>
                        <th scope="col" style={{ width: 20 + "%" }} onClick={() =>{props.sortEmployees()}}>Name</th>
                        <th scope="col" style={{ width: 20 + "%" }}>Email</th>
                        <th scope="col" style={{ width: 20 + "%" }}>Phone</th>
                        <th scope="col" style={{ width: 20 + "%" }}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Employees.map(employee => (
                        <tr key={employee.login.uuid}>
                            <td><img src={employee.picture.thumbnail}></img></td>
                            <th scope="row">{employee.name.first} {employee.name.last}</th>
                            <td><a href={'mailto:' + employee.email}>{employee.email}</a></td>
                            <td>{employee.phone}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;