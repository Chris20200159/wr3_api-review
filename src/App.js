import React from 'react';
import './App.css';
import axios from 'axios';
import Employee from './Components/Employee';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      newEmpName: '',
      newEmpTitle: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/employees')
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    axios
      .post('/api/employees', { name: this.state.newEmpName, title: this.state.newEmpTitle })
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }

  handleEditEmployee = (empId, nameStr) => {
    axios
      .put('/api/employees', { empId, nameStr })
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { employees } = this.state;

    const employeesMapped = employees.map((employee, i) => {
      return <Employee key={i} employee={employee} handleEditEmployee={this.handleEditEmployee} />
    })

    return (
      <div className="App">
        <div>
          <input onChange={this.handleInput} name='newEmpName' placeholder='new employee name' />
          <input onChange={this.handleInput} name='newEmpTitle' placeholder='new employee title' />
          <button onClick={this.handleSubmit}>add</button>
        </div>
        <h1>Employees</h1>
        { employeesMapped }
      </div>
    );
  }
}

export default App;
