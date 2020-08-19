const express = require('express');
const app = express();
const ctrl = require('./controller');

app.use(express.json());

app.get('/api/employees', ctrl.getEmployees);
app.post('/api/employees', ctrl.addEmployee);
app.put('/api/employees', ctrl.editEmployee);


app.listen(5050, () => console.log('Server serving on 5050'))