var express = require("express");
var router = express.Router();
const { id } = require("date-fns/locale");
let teacher_registration = require("../../model/register/teacher_register");


//create data implementation - exception handling

router.post("/addTeacher", async function (req, res, next){       
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
    const educationQualification = req.body.educationQualification;
    const experience = req.body.experience;
    const registerDate = req.body.registerDate;
    const signature = req.body.signature;


    const newteachersRegister = new teacher_registration({ 
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
        educationQualification,
        experience,
        registerDate,
        signature

        
    });

    await newteachersRegister.save().then(() => {
        res.json("Teacher Registration Success!");
    }).catch((err) => {
        console.log(err);
        res.json("Teacher Registration Failed!");
    })
});


//read implementaion
router.get("/",async(req,res)=>{

    await teacher_register.find(id)
    .then((teacher_registers)=> res.json(teacher_registers))
    .catch((err)=> res.status(403).json(
        {
            success : false,
            message : err,
            payload: {}
        }
        ));
})

//update data in the database
router.put("/update/:id", async function (req, res){
    let userId = req.params.id;
    const{
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
        grade   } = req.body;

    const updateteacher_register = {
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
    }   

    const update = await teacher_register.findByIdAndUpdate(userId, updateteacher_register).then(() =>{
        res.status(200).send({status: "User updated", user: update})

    }).catch((err) => {
        console.log(err);
        res.status(403).send({status: "Error with updating data"});
    })

})

//delete data implementation from database
router.delete("/delete/:id", async (req, res) => {
    let userId = req.params.id;

    await teacher_register.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "user deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleted", error:err.message});
    })
})

//fetch/read data of one user only
router.get("/get:id",async (req, res) => {
    let userId = req.params.id;
    const user = await teacher_register.findById(userId)
    .then(() => {
        res.status(200).send({status: "user fetched", user: user})
    }).catch(() => {
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})


module.exports = router;
