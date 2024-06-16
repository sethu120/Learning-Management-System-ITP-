const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8070

app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGODB_URL;
global.URI = url;

mongoose.connect(url, {
  //useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false
})

const connection = mongoose.connection;

connection.once("open", () => {
  console.log('MongoDB Connection Success!!!');
})


// app.use('/student_register', student_register);
// const student_register = require('./routes/Register/students_register')
// app.use("/student_register" , student_register);
const student_register = require('./routes/Register/students_register')
const student_profile = require("./routes/Register/student_profile")
app.use("/student_register" , student_register);
// app.use("/student_register" , student_profile);

const teacher_register = require('./routes/Register/teachers_register')  
app.use("/teacher_register" , teacher_register);

const edit_Proifile = require('./routes/Register/student_profile')  
app.use("/edit_Proifile" , edit_Proifile);

// const createActivity = require('.')  
// app.use("/createActivity" , createActivity);

//rajitha----------------------------------------------------
const bank_account = require('./routes/payments/teacher_bank_Account.js');
app.use('/bank_account', bank_account);

const teacher_withdraw = require('./routes/payments/teacher_withdraw.js');
app.use('/teacher_withdraw', teacher_withdraw);

const student_card_payment = require('./routes/payments/student_card_payment.js');
app.use('/student_card_payment', student_card_payment);

const student_bank_payment = require('./routes/payments/student_bank_payment.js');
app.use('/student_bank_payment', student_bank_payment);

//malith------------------------------------------------------
const advertiseRouter = require('./routes/advertise/advertise')
app.use("/advertise" , advertiseRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`)
});

