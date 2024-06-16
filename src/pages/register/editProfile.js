import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Avatar, Box, Button, Grid, IconButton, Paper, TextField, Typography} from "@mui/material";
import {BoxWithShadow} from "../../components/CustomBoxes";
import BackgroundImage from "../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../assets/images/profile-pic.jpg";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import AdvertisementProfileMenu from "../../components/advertisement/AdvertisementProfileMenu";
import axios from 'axios';

export default function EditProfile  () {

    const [Name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [privetNumber, setPrivetNumber] = useState("");
    const [address, setAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    const [school, setSchool] = useState("");
    const [district, setDistrict] = useState("");

    const history = useNavigate();

    function editUsreDetails(e)
    {
        e.preventDefault();
        const editProifile = 
        {
            Name,
            dateOfBirth,
            nic,
            email,
            privetNumber,
            address,
            userName,
            subject,
            grade,
            school,
            district
        }

        axios.put("http://localhost:8070/edit_Proifile/update/:id",editProifile)
        .then((res)=>{
            console.log("respond : ", res.data)
                setName("");
                setDateOfBirth("");
                setNic("");
                setAddress("");
                setEmail("");
                setPrivetNumber("");
                setUserName("");
                setSubject("");
                setGrade("");
                setSchool("");
                setDistrict("");
         }).catch((err) => {
            alert(err);

    })

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
                            <IconButton size="small" sx={{ml: 2}}>
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
                            <Typography variant={"h4"}>Edit Profile</Typography>
                        </Grid>

                        <form onSubmit={editUsreDetails}>

                            {/* ------------------Student name -------------------- */}
                            <Grid container direction={"row"} py={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Student name</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Student Name"}
                                               value={Name}
                                               type={"text"}
                                               onInput={e => setName(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ Birthday day -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Birthday Day</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Birthday Day"}
                                               value={dateOfBirth}
                                               onInput={e => setDateOfBirth(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ Nic -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Nic</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               sx={{}}
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Nic"}
                                               value={nic}
                                    
                                               onInput={e => setNic(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ emial-------------------- */}


                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Email</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               sx={{}}
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Nic"}
                                               value={email}
                                               type={"email"}
                                               onInput={e => setEmail(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ Address  -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Address </Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}
                                >
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Address"}
                                               value={address}
                                               onInput={e => setAddress(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ Phone number  -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Phone Number </Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}
                                >
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Phone Number "}
                                               value={privetNumber}
                                               onInput={e => setPrivetNumber(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ User name -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >User name</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter User Name"}
                                               value={userName}
                                               type={"text"}
                                               onInput={e => setUserName(e.target.value)}/>
                                </Grid>
                            </Grid>

                            {/* ------------------ Subjects -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Subjects</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Subjects"}
                                               value={subject}
                                               type={"text"}
                                               onInput={e => setSubject(e.target.value)}/>
                                </Grid>
                            </Grid>

                            {/* ------------------ Grade -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Grade</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter Grade"}
                                               value={grade}
                                               type={"text"}
                                               onInput={e => setGrade(e.target.value)}/>
                                </Grid>
                            </Grid>

                            {/* ------------------ User name -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >School</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter School"}
                                               value={school}
                                               type={"text"}
                                               onInput={e => setSchool(e.target.value)}/>
                                </Grid>
                            </Grid>

                            {/* ------------------ District -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >District</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter District"}
                                               value={district}
                                               type={"text"}
                                               onInput={e => setDistrict(e.target.value)}/>
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
                                            sx={{padding: "10px", backgroundColor: "#00B74A"}}>Save</Button>
                                </Grid>

                            </Grid>
                        </form>

                    </Grid>
                </BoxWithShadow>
            </Box>
            {/* <AdvertisementProfileMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/> */}
        </>
    );
};


