import React from 'react';
import './App.css';
import axios from 'axios';
import Employee from './Components/Employee';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  render() {
    const { employees } = this.state;

    const employeesMapped = employees.map((employee, i) => {
      return <Employee key={i} employee={employee} />
    })

    return (
      <div className="App">
        <h1>Employees</h1>
        { employeesMapped }
      </div>
    );
  }
}

export default App;
