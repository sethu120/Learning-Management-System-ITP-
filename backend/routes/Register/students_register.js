var express = require("express");
var router = express.Router();
const { id } = require("date-fns/locale");
const bcrypt = require('bcryptjs');
let students_register = require("../../model/register/student_register");
// let profile = require("../../model/register/profile_model");

 //create data implementation - exception handling

 router.route("/addStudent").post(async (req, res) =>{
    const Name = req.body.Name;
    const dateOfBirth = req.body.dateOfBirth;
    const gender = req.body.gender;
    const nic = req.body.nic;
    const address = req.body.address;
    const email = req.body.email;
    const privetNumber = req.body.privetNumber;
    const homeNumber = req.body.homeNumber;
    const userName = req.body.userName;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const subject = req.body.subject;
    const grade = req.body.grade;
    const school = req.body.school;
    const district = req.body.district;
    const additionalComment = req.body.additionalComment;
    const registerDate = req.body.registerDate;
    const signature = req.body.signature;


    const newStudentsRegister = new students_register({
        Name,
        dateOfBirth,
        gender,
        nic,
        address,
        email,
        privetNumber,
        homeNumber,
        userName,
        password,
        confirmPassword,
        subject,
        grade,
        school,
        district,
        additionalComment,
        registerDate,
        signature

        
    });

     await newStudentsRegister.save().then(() => {
         res.json("Student Registration Success!");
     }).catch((err) => {
         console.log(err);
         res.json("Student Registration Failed!");
     })
});

//log in
router.route('/login').post((req, res, next) => {
  var userName = req.body.userName;
  var password = req.body.password;

  systemReg.findOne({$or: [{userName:userName}]})
  .then(systemreg =>{
      if(systemreg){
              bcrypt.compare(password, systemreg.password, function(err, result){
                  if(err){
                      res.json({
                          error:err
                      })
                  }
                  if(result){
                      console.log(err);
                      res.json({
                          message: true
                      })      
                  }else{
                      console.log(err);
                       res.json({
                          message: false
                      })    
                  }
              })

      }else{
          res.json({
              message: false
          })
      }
  })
});


//log in check
// app.post("/login", (req, res) => {
//     try {
//       if (req.body && req.body.username && req.body.password) {
//         students_register.find({ username: req.body.username }, (err, data) => {
//           if (data.length > 0) {
  
//             if (bcrypt.compareSync(data[0].password, req.body.password)) {
//               checkUserAndGenerateToken(data[0], req, res);
//             } else {
  
//               res.status(400).json({
//                 errorMessage: 'Username or password is incorrect!',
//                 status: false
//               });
//             }
  
//           } else {
//             res.status(400).json({
//               errorMessage: 'Username or password is incorrect!',
//               status: false
//             });
//           }
//         })
//       } else {
//         res.status(400).json({
//           errorMessage: 'Add proper parameter first!',
//           status: false
//         });
//       }
//     } catch (e) {
//       res.status(400).json({
//         errorMessage: 'Something went wrong!',
//         status: false
//       });
//     }
  
//   });

//update data in the database
router.put("/update/:id", async function (req, res){
    let userId = req.params.id;
    const{
        Name,
        dateOfBirth,
        nic,
        address,
        email,
        privetNumber,
        userName,
        subject,
        grade,
        school } = req.body;

    const updateuserprofile = {
        Name,
        dateOfBirth,
        nic,
        address,
        email,
        privetNumber,
        userName,
        subject,
        grade,
        school
    }

    userprofile.findByIdAndUpdate(userId, updateuserprofile).then(() =>{
        res.status(200).send({status: "User updated", user: update})

    }).catch((err) => {
        console.log(err);
        res.status(403).send({status: "Error with updating data"});
    })

})

//read implementaion
router.get("/",async(req,res)=> {

    await students_register.find(id)
    .then((students_registers)=> res.json(students_registers))
    .catch((err)=> res.status(403).json(
        {
            success : false,
            message : err,
            payload: {}
        }
        ));
});

//fecth
router.get("/get/:id",async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let userId = req.params.id; //fetch the id parameter in url

  await students_register.findById(userId).exec(function(err,result){
    if(err){
        res.json({"err":"Something went wrong"})
    } else{
        res.json({student:result})
    }
  
  }) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
  

})

//delete data implementation from database
router.delete("/delete/:id", async (req, res) => {
    let userId = req.params.id;

    await students_register.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "user deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleted", error:err.message});
    })
})

// fetch/read data of one user only
// router.get("/get/:id",async (req, res) => {
//     let userId = req.params.id;
//     console.log(userId);
//     const user = await students_register.findById(userId)
//     .then(() => {
//         res.status(200).send({status: "user fetched", user: user})
//     }).catch(() => {
//         res.status(500).send({status: "Error with get user"});
//     })
// })



module.exports = router;
