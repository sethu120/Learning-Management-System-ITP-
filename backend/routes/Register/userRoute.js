var express = require("express");
var router = express.Router();
const { id } = require("date-fns/locale");
const userModel = require("../../model/register/userModel");

router.route("/addStudent").post(async (req, res) =>{
    const id = req.body.id;
    const Name = req.body.Name;
    const email = req.body.email;
    const userName = req.body.userName;
    const type = req.body.type


    const newuserModel = new userModel({
        id,
        Name,
        email,
        userName,
        type
        
    });

     await newuserModel.save().then(() => {
         res.json("Student Registration Success!");
     }).catch((err) => {
         console.log(err);
         res.json("Student Registration Failed!");
     })
});


//update data in the database
router.put("/update/:id", async function (req, res){
    let userId = req.params.id;
    const{
        id,
        Name,
        email,
        userName,
        type } = req.body;

    const updateuserModel = {
        id,
        Name,
        email,
        userName,
        type
    }

    userModel.findByIdAndUpdate(userId, updateuserModel).then(() =>{
        res.status(200).send({status: "User updated", user: update})

    }).catch((err) => {
        console.log(err);
        res.status(403).send({status: "Error with updating data"});
    })

})

router.get("/getstudent/:id",async (req, res) => {
    let userId = req.params.id;
    const user = await userModel.findById(userId)
    .then(() => {
        res.status(200).send({status: "user fetched", user: user})
    }).catch(() => {
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})



module.exports = router;