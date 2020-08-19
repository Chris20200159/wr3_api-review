import React, { Component } from 'react';

export default class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange = e => {
        this.setState({ name: e.target.name })
    }

    render() {
        const { employee } = this.props;

        return (
            <div>
                <h3>
                    Employee Name: {employee.name}, {employee.title}
                </h3>
                <input onChange={this.handleChange} placeholder='edit name' />
            </div>
        )
    }
}