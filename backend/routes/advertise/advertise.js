const router = require("express").Router();
const Advertise = require("../../model/advertise/advertise");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination:(req, file, callback) => {
        callback(null, "../frontend/src/assets/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})
router.post("/create", upload.single("image"), async (req, res) => {
    //route for creating database insertion

    const teacherId = req.body.teacherId;
    const subject = req.body.subject;
    const contactNo = req.body.contactNo;
    const email = req.body.email;
    const title = req.body.title;
    const description = req.body.description;
    const visibleDays = req.body.visibleDays;
    const postTime = new Date();
    const image = req.file.filename;
    console.log("ADNAME : ", subject)

    const newAdvertise = new Advertise({
        teacherId,
        subject,
        contactNo,
        email,
        title,
        description,
        visibleDays,
        postTime,
        image
    });

    await newAdvertise.save().then(() => {
        res.json("Advertisement Added Success!");
    }).catch((err) => {
        console.log(err);
        res.json("Advertisement Added Failed!");
    })

    // await newAdvertise
    //     .save()
    //     .then(() => res.status(200).json({success: true}))
    //     .catch((error) => res.status(500).json({success: false, error: error})); // else save to the db
});

router.route("/").get(async (req, res) => {
    //route for fetching al the data
    await Advertise.find()
        .then((Advertise) => res.json(Advertise))
        .catch((error) => res.status(500).json({success: false, error: error}));
});

router.route("/get/:id").get(async (req, res) => {
    //route for getting a relavant document using id
    const {id} = req.params;

    await Advertise.findById(id) //find by the document by id
        .then((todo) => res.json(todo))
        .catch((error) => res.status(500).json({success: false, error: error}));
});

router.route("/delete/:id").delete(async (req, res) => {
    //route for deleting a relavant document using id
    const {id} = req.params;

    await Advertise.findByIdAndDelete(id) //find by the document by id and delete
        .then(() => {
            res.json("Advertisement Deleted!");
        })
        .catch((error) => res.status(500).json({success: false, error: error}));
});

router.put("/update/:id", upload.single("image"), async (req, res) => {
    //route for updating a relavant document using id
    //backend route for updating relavant data and passing back
    // const {id} = req.params;
    // const {adName, contactNo, email, title, description, priceRange} = req.body;

    let adId = req.params.id;
    console.log("---------------------------------------------------------- Image Change: ", req.body.imageChange)
    const teacherId = req.body.teacherId;
    const subject = req.body.subject;
    const contactNo = req.body.contactNo;
    const email = req.body.email;
    const title = req.body.title;
    const description = req.body.description;
    const visibleDays = req.body.visibleDays;
    const postTime = new Date();
    let image;
    if ((req.body.imageChange).toLowerCase() === "true"){
        image = req.file.filename;
        console.log("---------------------------------------------------------- Image true Change: ", req.body.imageChange)
    }else {
        image = req.body.imageName;
        console.log("---------------------------------------------------------- Image false Change: ", req.body.imageChange)
    }
    console.log("ADNAME : ", subject)

    const updateAdvertise = {
        teacherId,
        subject,
        contactNo,
        email,
        title,
        description,
        visibleDays,
        postTime,
        image
    };

    await Advertise.findByIdAndUpdate(adId, updateAdvertise) //find the document by and update the relavant data
        .then(() => {
            res.json("Advertisement Updated Success!");
        }).catch((err) => {
            console.log(err);
            res.json("Advertisement Updated Failed!");
        });
});

module.exports = router;
