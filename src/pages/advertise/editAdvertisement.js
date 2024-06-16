import React, {useEffect, useRef, useState} from 'react';
import {
    Avatar,
    Box, Button,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select, TextField,
    Typography
} from "@mui/material";
import {BoxWithShadow} from "../../components/CustomBoxes";
import BackgroundImage from "../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../assets/images/profile-pic.jpg";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import AdvertisementProfileMenu from "../../components/advertisement/AdvertisementProfileMenu";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const EditAdvertisement = (props) => {

    const {userId, userType} = props;
    console.log("user id : ", userId);
    const location = useLocation();
    const data = location.state;

    const [subject, setSubject] = useState(data ? data.subject : "");
    const [contactNo, setContactNo] = useState(data ? data.contactNo : "");
    const [email, setEmail] = useState(data ? data.email : "");
    const [description, setDescription] = useState(data ? data.description : "");
    const [title, setTitle] = useState(data ? data.title : "");
    const [visibleDays, setVisibleDays] = useState(data ? data.visibleDays : "");
    const [fileName, setFileName] = useState(data ? data.image : '')
    const [fileObj, setFileObj] = useState("")
    const [fileChange, setFileChange] = useState(false)

    const [validationStatus, setValidationStatus] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const fileRef = useRef();
    const navigate = useNavigate();


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const myData = {
        subject: subject,
        contactNo: contactNo,
        email: email,
        description: description,
        title: title,
        visibleDays: visibleDays
    }

    function handleSubmit(e) {

        e.preventDefault();

        const formData = new FormData();
        formData.append("teacherId", userId);
        formData.append("subject", subject);
        formData.append("contactNo", contactNo);
        formData.append("email", email);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("visibleDays", visibleDays);
        formData.append("image", fileObj);
        formData.append("imageChange", fileChange);
        formData.append("imageName", fileName);

        if (validationStatus) {
            /* update a advertisement */
            axios.put(`http://localhost:8070/advertise/update/${data._id}`, formData)
                .then((res) => {
                    console.log("respond : ", res.data)
                    alert(res.data);
                    setSubject("");
                    setContactNo("");
                    setEmail("");
                    setTitle("");
                    setDescription("");
                    setVisibleDays("");
                    fileRef.current.value = "";
                }).catch((err) => {
                // alert(err);
            })
            navigate('/advertisement_summery', {state: myData});
        }
    }

    function fileHandler(e) {
        setFileObj(e.target.files[0]);
        setFileName(fileObj.name);
        setFileChange(true);
    }

    /* text fields validations */
    function validationCheck() {
        if (subject === "") {
            alert("Subject field is required!")
        } else if (contactNo === "") {
            alert("Contact No. field is required!")
        } else if (!/^[0-9]{10}$/.test(contactNo.trim())) {
            alert("Please enter a valid contact number!")
        } else if (email === "") {
            alert("Email field is required!")
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Email is not valid.")
        } else if (title === "") {
            alert("Title field is required!")
        } else if (description === "") {
            alert("Description field is required!")
        } else if (visibleDays === "") {
            alert("Visible days field is required!")
        } else if (fileObj === "") {
            alert("Please enter advertisement image")
        } else {
            setValidationStatus(true)
        }
    }

    return (
        <>
            <Box py={4} sx={{bgcolor: "#F8F9FD", minHeight: "100vh"}}>
                <BoxWithShadow component={Paper} sx={{bgcolor: "#FBFBFB",}}>
                    <Grid container direction={"column"}>

                        {/*------------ Header ----------*/}
                        <Grid item align={"center"} paddingY={5} sx={{
                            bgcolor: "#333",
                            height: "200px",
                            backgroundImage: `url(${BackgroundImage}) `,
                            backgroundSize: "cover"
                        }}/>

                        {/*---------- Profile Icon -----------*/}
                        <Grid item container justifyContent={"flex-end"} p={2}>
                            <IconButton onClick={handleClick} size="small" sx={{ml: 2}}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={ProfileIcon}
                                    sx={{width: 60, height: 60}}
                                />
                            </IconButton>
                        </Grid>

                        {/*----------- title ------------*/}
                        <Grid container direction={"row"} py={2} px={3}
                              sx={{borderBottom: "1px solid #222", borderTop: "1px solid #222"}}
                              justifyContent={"space-between"}>
                            <Typography variant={"h4"}>Edit Advertisement</Typography>
                        </Grid>

                        <form onSubmit={handleSubmit} encType={"multipart/form-data"}>

                            {/* ------------------ Subject Name -------------------- */}
                            <Grid container direction={"row"} py={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Subject Name</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="test-select-label3">Select Advertisement of Subject</InputLabel>
                                        <Select
                                            value={subject}
                                            required
                                            onChange={(e) => setSubject(e.target.value)}
                                            labelId="test-select-label3"
                                            label="Select Advertisement of Subject"
                                            fullWidth
                                        >
                                            <MenuItem key={1} value={"Maths"}>Maths</MenuItem>
                                            <MenuItem key={2} value={"Physics"}>Physics</MenuItem>
                                            <MenuItem key={3} value={"Chemistry"}>Chemistry</MenuItem>
                                            <MenuItem key={4} value={"English"}>English</MenuItem>
                                            <MenuItem key={5} value={"Art"}>Art</MenuItem>
                                            <MenuItem key={6} value={"Music"}>Music</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>

                            {/* ------------------ Contact No. -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Contact No.</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Contact Number"}
                                               value={contactNo}
                                               onChange={(e) => setContactNo(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ Email Address -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Email Address</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               sx={{}}
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Email Address"}
                                               value={email}
                                               type={"email"}
                                               onChange={(e) => setEmail(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ Title -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Title</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}
                                >
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Title"}
                                               value={title}
                                               onChange={(e) => setTitle(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ Description -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Description</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}
                                >
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Description"}
                                               value={description}
                                               onChange={(e) => setDescription(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ Price Range -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Visible Days</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="test-select-label2">Enter Visible Days</InputLabel>
                                        <Select
                                            value={visibleDays}
                                            required
                                            onChange={(e) => setVisibleDays(e.target.value)}
                                            labelId="test-select-label2"
                                            label="Enter Visible Days"
                                            fullWidth
                                        >
                                            <MenuItem key={1} value={"1 Day"}>1 Day</MenuItem>
                                            <MenuItem key={2} value={"2 Days"}>2 Days</MenuItem>
                                            <MenuItem key={3} value={"3 Days"}>3 Days</MenuItem>
                                            <MenuItem key={4} value={"5 Days"}>5 Days</MenuItem>
                                            <MenuItem key={5} value={"10 Days"}>10 Days</MenuItem>
                                            <MenuItem key={6} value={"15 Days"}>15 Days</MenuItem>
                                            <MenuItem key={7} value={"20 Days"}>20 Days</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>

                            {/*-------- file uploader ----------*/}
                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5},}}
                            >
                                <Grid item direction={"column"} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Button
                                        variant={"outlined"}
                                        component="label"
                                        color={"inherit"}
                                    >
                                        <Grid item container direction={"column"} justifyContent="center"
                                              alignItems={"center"} p={10}>

                                            {fileChange ?
                                                <Typography variant={"body2"}>{fileObj.name}</Typography>
                                                : <Typography variant={"body2"}>{fileName}</Typography>}
                                            <CloudUploadTwoToneIcon/>
                                            <Typography variant={"button"}>Upload File</Typography>
                                            <input
                                                ref={fileRef}
                                                type="file"
                                                filename={"image"}
                                                hidden
                                                onChange={fileHandler}
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>

                            {/* ------------------ Cancel & Submit Button -------------------- */}
                            <Grid container direction={"row"} pb={2} px={5}
                                  justifyContent={"flex-end"}>
                                <Grid item direction={"column"} xs={2}
                                      container
                                      justifyContent="center" px={1}
                                >
                                    <Button variant={"contained"} onClick={() => navigate(-1)}
                                            sx={{padding: "10px", backgroundColor: "#262626"}}>Cancel</Button>
                                </Grid>
                                <Grid item direction={"column"} xs={2}
                                      container
                                      justifyContent="center" px={1}
                                >
                                    <Button type={"submit"} variant={"contained"} onClick={() => validationCheck()}
                                            sx={{padding: "10px", backgroundColor: "#00B74A"}}>Update</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </BoxWithShadow>
            </Box>
            <AdvertisementProfileMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/>
        </>
    );
};

export default EditAdvertisement;
