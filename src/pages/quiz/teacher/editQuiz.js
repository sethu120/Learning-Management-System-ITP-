import React, {useRef, useState} from 'react';
import {
    Avatar,
    Box, Button,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Typography
} from "@mui/material";
import {BoxWithShadow} from "../../../components/CustomBoxes";
import BackgroundImage from "../../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../../assets/images/profile-pic.jpg";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import QuizProfileMenu from "../../../components/quiz/teacher/QuizProfileMenu";
import {useNavigate} from "react-router-dom";

const EditQuiz = (props) => {

    const {userId, userType} = props;
    console.log("user id : ",userId);

    const [quizType, setQuizType] = useState("");
    const [subject, setSubject] = useState("");
    const [durationTime, setDurationTime] = useState("");
    const [fileName, setFileName] = useState('')

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


    function handleSubmit() {
        //integration part
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
                            <Typography variant={"h4"}>Edit Quiz</Typography>
                        </Grid>

                        <form onSubmit={handleSubmit} encType={"multipart/form-data"}>

                            {/* ------------------ Quiz Type -------------------- */}
                            <Grid container direction={"row"} py={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Quiz Type</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="test-select-label3">Select Quiz Type</InputLabel>
                                        <Select
                                            value={quizType}
                                            required
                                            onChange={(e) => setQuizType(e.target.value)}
                                            labelId="test-select-label3"
                                            label="Select Quiz Type"
                                            fullWidth
                                        >
                                            <MenuItem key={1} value={"Multiple Choice"}>Multiple Choice</MenuItem>
                                            <MenuItem key={2} value={"Structured"}>Structured</MenuItem>
                                            <MenuItem key={3} value={"Eassy"}>Eassy</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>

                            {/* ------------------ Subject Name -------------------- */}
                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Quiz Subject</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="test-select-label3">Select Subject of the Quiz</InputLabel>
                                        <Select
                                            value={subject}
                                            required
                                            onChange={(e) => setSubject(e.target.value)}
                                            labelId="test-select-label3"
                                            label="Select Subject of Quiz"
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

                            {/* ------------------ Duration Time -------------------- */}

                            <Grid container direction={"row"} pb={2} px={20}
                                  sx={{paddingX: {lg: 20, md: 15, sm: 10, xs: 5}}}
                            >
                                <Grid item direction={"column"} lg={3} md={4} xs={12}
                                      container
                                      justifyContent="center"
                                >
                                    <Typography variant={"subtitle2"}
                                    >Duration Time</Typography>
                                </Grid>
                                <Grid item direction={"column"} lg={9} md={8} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="test-select-label2">Select Duration Time</InputLabel>
                                        <Select
                                            value={durationTime}
                                            required
                                            onChange={(e) => setDurationTime(e.target.value)}
                                            labelId="test-select-label2"
                                            label="Select Duration Time"
                                            fullWidth
                                        >
                                            <MenuItem key={1} value={"1 Day"}>45 Minutes</MenuItem>
                                            <MenuItem key={2} value={"2 Days"}>1 hour</MenuItem>
                                            <MenuItem key={3} value={"3 Days"}>3 Days</MenuItem>
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

                                            {/*{fileName && <Typography variant={"body2"}>{fileName}</Typography>}*/}
                                            <CloudUploadTwoToneIcon/>
                                            <Typography variant={"button"}>Upload the paper structure</Typography>
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
                                    <Button type={"submit"} variant={"contained"}
                                            sx={{padding: "10px", backgroundColor: "#00B74A"}}>Update</Button>
                                    {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </BoxWithShadow>
            </Box>
            <QuizProfileMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/>
        </>
    );
};

export default EditQuiz;
