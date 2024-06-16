const router = require("express").Router();
let Std = require("../models/Std");

router.route("/add").post((req,res)=>{          //http:/localhost:8070/std/add       /create data implementation - exception handling
    const firrstname = req.body.firrstname;
    const middletname = req.body.middlename;
    const lasttname = req.body.lastname;
    const dateOfBirth = req.body.dateOfBirth;
    const nic = req.body.nic;
    const gender = req.body.gender;
    const age = Number(req.body.age);
    const email = req.body.email;
    const privetNumber =req.body.privetNumber;
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
    

    const newStd = new Std({
        firstName,    
        middleName,     
        lastName,   
        dateOfBirth,
        gende,
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
        signature,
    })

    newStd.save().then(() =>{
        res.json("Std added")
    }).catch((err)=>{
        console.log(err);
    })
})
//read implementaion
//http://localhost:8070/std

router.route("/").get((req,res)=>{

    Std.find().then((stds)=>{
        res.json(stds)
    }).catch((err)=>{
        console.log(err)
    })
})

//update data in the database
//http://localhost:8070/std/update/dggfhgfhjgjdsfdgf

router.route("/update/:id").put(async (req, res)=>{
    let userId = req.params.id;
    const{name, age, gender} = req.body;

    const updateStd = {
        name,
        age,
        gender
    }

    const update = await Std.findByIdAndUpdate(userId, updateStd).then(() =>{
        res.status(200).send({status: "User updated", user: update})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})

//delete data implementation from database
//http://localhost:8070/std/delete/dggfhgfhjgjdsfdgf
router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Std.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "user deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleted", error:err.message});
    })
})

//fetch/read data of one user only
router.route("/get:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Std.findById(userId)
    .then(() => {
        res.status(200).send({status: "user fetched", user: user})
    }).catch(() => {
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})





module.export = router;