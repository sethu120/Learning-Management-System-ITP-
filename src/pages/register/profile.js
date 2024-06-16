import React, {useEffect, useRef, useState} from "react"
import {Avatar, Box, Button, Container, Grid, IconButton, Paper, TextField, Typography} from "@mui/material";
import {BoxWithShadow} from "../../components/CustomBoxes";
import BackgroundImage from "../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../assets/images/profile-pic.jpg";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import AdvertisementProfileMenu from "../../components/advertisement/AdvertisementProfileMenu";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Profile = () => {


    const [userData, setUserData] = useState();
    const [Name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [nic, setNic] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [privetNumber, setPrivetNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [subject, setSubject] = useState([]);
    const [grade, setGrade] = useState('');
    const [school, setSchool] = useState('');
    const [district, setDistrict] = useState('');
    const history = useNavigate();

    useEffect(() => {

            axios.get("http://localhost:8070/student_register/628402f0e1bb3dafe5698cff")
                .then( (res) => {
                    console.log(res.data)
                    setUserData(res.data)
                }).catch(() => {
                alert("No data")
            })
        }
    , []);

    const handleClose = () => {
        // setAnchorEl(null);
    };

    const handleClick = (event) => {
        // setAnchorEl(event.currentTarget);
    };

    function handleSubmit() {

    }

    // const handleFile = (e) => {
    //     setUploadFile(fileRef.current.files[0])
    //     setFileName(fileRef.current.files[0].name.toString())
    //     console.log("file upload", fileRef.current.files[0].name.toString())
    //     console.log("file upload", fileRef)
    // }

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
                            <Typography variant={"h4"}>Profile</Typography>
                        </Grid>

                        {/*----------- Profile image ------------*/}
                        <Grid container direction={"row"} py={2} px={3} justifyContent={"center"}>
                            <Avatar
                                alt="Remy Sharp"
                                src={ProfileIcon}
                                sx={{width: 200, height: 200}}
                            />
                        </Grid>

                        <form onSubmit={handleSubmit}>

                            {/* ------------------ Student Name -------------------- */}
                            <Grid container direction={"row"} py={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} pr={5} align={"right"}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Student Name</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.Name}</Typography>
                                </Grid>
                            </Grid>

                            {/* ------------------ Date Of Birth -------------------- */}
                            <Grid container direction={"row"} py={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Date Of Birth</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.dateOFBirth}</Typography>
                                </Grid>
                            </Grid>

                            {/* ------------------ NIC -------------------- */}
                            <Grid container direction={"row"} py={2}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                                  justifyContent="center"
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >NIC</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >12312312312</Typography>
                                </Grid>
                            </Grid>

                            {/* ------------------ Address  -------------------- */}
                            <Grid container direction={"row"} py={2}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                                  justifyContent="center"
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Address</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.nic}</Typography>
                                </Grid>
                            </Grid>

                            {/* ------------------ email  -------------------- */}
                            <Grid container direction={"row"} py={2}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                                  justifyContent="center"
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Email</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.email}</Typography>
                                </Grid>
                            </Grid>


                            {/* ------------------ Phone number  -------------------- */}
                            <Grid container direction={"row"} py={2}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                                  justifyContent="center"
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Phone number</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.nic}</Typography>
                                </Grid>
                            </Grid>

                            {/* ------------------ User name -------------------- */}
                            <Grid container direction={"row"} py={2}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                                  justifyContent="center"
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >User name</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.nic}</Typography>
                                </Grid>
                            </Grid>

                            {/* ------------------ Subjects -------------------- */}
                            <Grid container direction={"row"} py={2}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                                  justifyContent="center"
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Subjects</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.nic}</Typography>
                                </Grid>
                            </Grid>

                            {/* ------------------ Grade -------------------- */}
                            <Grid container direction={"row"} py={2}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                                  justifyContent="center"
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Grade</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.nic}</Typography>
                                </Grid>
                            </Grid>

                            {/* ------------------ School -------------------- */}
                            <Grid container direction={"row"} py={2}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                                  justifyContent="center"
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >School</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.nic}</Typography>
                                </Grid>
                            </Grid>

                            {/* ------------------ District -------------------- */}
                            <Grid container direction={"row"} py={2}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                                  justifyContent="center"
                            >
                                <Grid item direction={"column"} lg={6} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"} align={"right"} pr={5}
                                                color={"textSecondary"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >District</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={6} md={8} xs={12}>
                                    <Typography variant={"subtitle2"} pl={5}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >{userData.nic}</Typography>
                                </Grid>
                            </Grid>


                            {/* ------------------ Cancel & Submit Button -------------------- */}
                            <Grid container direction={"row"} pb={2} px={5}
                                  justifyContent={"flex-end"}>
                                <Grid item direction={"column"} xs={2}
                                      container
                                      justifyContent="center" px={1}
                                >
                                    <Button variant={"contained"} onClick={() => history(-1)}
                                            sx={{padding: "10px", backgroundColor: "#262626"}}>Cancel</Button>
                                </Grid>
                                <Grid item direction={"column"} xs={2}
                                      container
                                      justifyContent="center" px={1}
                                >
                                    <Button type={"submit"} variant={"contained"}
                                            sx={{padding: "10px", backgroundColor: "#00B74A"}}>Edit</Button>
                                </Grid>

                            </Grid>
                        </form>

                    </Grid>
                </BoxWithShadow>
            </Box>
            {/* <AdvertisementProfileMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/> */}
        </>
    )
}

export default Profile
