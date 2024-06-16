import React, {useEffect,useRef, useState} from 'react';
import {Avatar, Box, Button, Grid, IconButton, Paper, TextField, Typography} from "@mui/material";
import {BoxWithShadow} from "../../components/CustomBoxes";
import BackgroundImage from "../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../assets/images/profile-pic.jpg";
import {Search, SearchIconWrapper, StyledInputBase} from "../../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import {Link, useNavigate} from "react-router-dom";
import {activityDataList} from "./subjectActivities";
import CustomMenu from "../../components/CustomMenu";
import axios from "axios";

const CreateActivity = () => {

    const [teacherName, setTeacherName] = useState('');     
    const [moduleName, setModuleName] = useState('');
    const [uploadFile, setUploadFile] = useState(null);
    const [fileName, setFileName] = useState('')
    const history = useNavigate();
    const fileRef = useRef();


    // const handleFile = (e) => {
    //     setUploadFile(fileInput.current.files[0])
    //     setFileName(fileInput.current.files[0].name.toString())
    //     console.log("file upload", fileInput.current.files[0].name.toString())
    //     console.log("file upload", fileInput)
    // }


    

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function handleSubmit(e) {
            e.preventDefault();

        
            const formData = new FormData();
            formData.append("teacherName", teacherName);
            formData.append("moduleName", moduleName);
            formData.append("image", fileName);
            console.log("teacher : ", teacherName)
            console.log("module : ", moduleName)
            console.log("file : ", uploadFile)
            // console.log("formData : ",)
            // activityDataList.push({id: (activityDataList.length + 1), activity: moduleName})
            history(-1)

            axios.post("http://localhost:8070/advertise/create", formData) //server ek hdnn oni
            .then((res) => {
                console.log("respond : ", res.data)
                alert(res.data);
                setTeacherName("");
                setModuleName("");
                fileRef.current.value = "";
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
                            <IconButton onClick={handleClick} size="small" sx={{ml: 2}}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={ProfileIcon}
                                    sx={{width: 60, height: 60}}
                                />
                            </IconButton>
                        </Grid>

                        {/*------------ search bar ---------------*/}
                        <Grid item container justifyContent={"flex-end"} p={2}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Search>
                        </Grid>

                        {/*----------- title ------------*/}
                        <Grid container direction={"row"} py={2} px={3}
                              sx={{borderBottom: "1px solid #222", borderTop: "1px solid #222"}}
                              justifyContent={"space-between"}>
                            <Typography variant={"h4"}>Create Activity</Typography>
                        </Grid>

                        <form onSubmit={handleSubmit} encType={"multipart/form-data"}>
                            {/* ------------------ Teacher Name -------------------- */}

                            <Grid container direction={"row"} py={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Teacher Name</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <TextField margin="dense" id="outlined-basic"
                                               sx={{}}
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter teacher name"}
                                               value={teacherName}
                                               onInput={(e) => setTeacherName(e.target.value)}/>
                                </Grid>
                            </Grid>


                            {/* ------------------ Module Name -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                    // sx={{bgcolor: "#9b1313"}}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                        // sx={{bgcolor: "#0034ff"}}
                                    >Module Name</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}
                                    // sx={{bgcolor: "#139b8b"}}
                                >
                                    <TextField margin="dense" id="outlined-basic"
                                               sx={{}}
                                               fullWidth
                                               variant="outlined"
                                               label={"Enter module name"}
                                               value={moduleName}
                                               onInput={(e) => setModuleName(e.target.value)}/>
                                </Grid>
                            </Grid>

                            {/*-------- file uploader ----------*/}
                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5},}}
                            >
                                <Grid item direction={"column"} xs={12}
                                    // sx={{bgcolor: "#9b1313"}}
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

                                            {/* {fileName && <Typography variant={"body2"}>{fileName}</Typography>} */}
                                            <CloudUploadTwoToneIcon/>
                                            <Typography variant={"button"}>Upload File</Typography>
                                            <input
                                                ref={fileRef}
                                                type="file"
                                                filename={"image"}
                                                hidden
                                                onChange={(e) => setFileName(e.target.files[0])}
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>

                            {/* ------------------ Cancel & Submit Button -------------------- */}
                            <Grid container direction={"row"} pb={2} px={5}
                                // sx={{bgcolor: "#2eff00"}}
                                  justifyContent={"flex-end"}>
                                <Grid item direction={"column"} xs={2}
                                    // sx={{bgcolor: "#9b1313"}}
                                      container
                                      justifyContent="center" px={1}
                                >
                                    <Button variant={"contained"} onClick={() => history(-1)}
                                            sx={{padding: "10px", backgroundColor: "#262626"}}>Cancel</Button>
                                </Grid>
                                <Grid item direction={"column"} xs={2}
                                    // sx={{bgcolor: "#9b1313"}}
                                      container
                                      justifyContent="center" px={1}
                                >
                                    <Button type={"submit"} variant={"contained"}
                                            sx={{padding: "10px", backgroundColor: "#00B74A"}}>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>

                    </Grid>
                </BoxWithShadow>
            </Box>
            <CustomMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/>
        </>
    );
};

export default CreateActivity;
