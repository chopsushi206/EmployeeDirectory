import React, { Component } from "react";
import Table from "../components/Table"
import Search from "../components/Form"
import API from "../utils/API";

class Directory extends Component {
    state = {
        Employees: [],
        FilterEmployees: [],
        SortedEmployees: [],
        order: "descend",
    };

    
    componentDidMount() {
        this.getAllEmployees();
    }

    getAllEmployees = () => {
        API.getAllEmployees()
            .then(res =>
                this.setState({
                    Employees: res.data.results,
                    FilterEmployees: res.data.results,
                })
            )
            .catch(err => console.log(err));
    };

    getFilterEmployees = (event) => {
        const filterValue = event.target.value
        const filtered = this.state.Employees.filter(employee => {
            let empValues = Object.values(employee).join('').toLowerCase()
            return empValues.indexOf(filterValue.toLowerCase()) !== -1
        })
        this.setState({ FilterEmployees: filtered })
    }

    sortEmployees = () => {
        if (this.state.order === "descend") {
            this.setState({ order: 'ascend' })
        } else {
            this.setState({ order: 'descend' })
        }
        console.log(this.state.order);

        let sorted;

        if (this.state.order === 'ascend') {
            sorted = this.state.FilterEmployees.sort((a, b) => {
                if (a.name.first < b.name.first) {
                    return -1
                } else if (a.name.first > b.name.first) {
                    return 1
                }
                else {
                    return 0
                }
            })
        } else {
            sorted = this.state.FilterEmployees.sort((a, b) => {
                if (a.name.first < b.name.first) {
                    return 1
                } else if (a.name.first > b.name.first) {
                    return -1
                }
                else {
                    return 0
                }
            })
        }
        this.setState({ SortedEmployees: sorted })
    }

    render() {
        return (
            <div>
                <Search getFilterEmployees={this.getFilterEmployees} />
                <Table Employees={this.state.FilterEmployees} sortEmployees={this.sortEmployees} />
            </div>
        );
    }
}

export default Directory;