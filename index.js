const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./core/db');
const { patientValidation, appointmentValidation } = require('./utils/validations');
const { PatientCtrl, AppointmentCtrl } = require('./controllers');

const app = express();
app.use(express.json());
app.use(cors());


// @TODO: Попробовать сделать push-уведомления для стоматолога.

app.get('/patients', PatientCtrl.all);
app.post('/patients', patientValidation.create, PatientCtrl.create);


app.get('/appointments', AppointmentCtrl.all);
app.post('/appointments', appointmentValidation.create, AppointmentCtrl.create);


app.get('/patients', function(req, res) {

console.log(req.parames);

return res.send('Hello')

});


app.listen(6666, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log('Server runned!');
  });