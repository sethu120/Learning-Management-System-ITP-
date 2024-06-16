import React, {useState} from 'react';
import {Avatar, Box, Button, Grid, IconButton, Paper, Typography} from "@mui/material";
import {BoxWithShadow} from "../../../components/CustomBoxes";
import BackgroundImage from "../../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../../assets/images/profile-pic.jpg";
import {Link, useNavigate} from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import image from "../../../assets/images/online_learning.jpg";
import QuizCard from "../../../components/quiz/teacher/QuizCard";
import QuizProfileMenu from "../../../components/quiz/teacher/QuizProfileMenu";

const dummyData = [
    {id:1 ,title: "Maths", subtitle:"Essay", image:image, durationTime: "3 Hours"},
    {id:2 ,title: "Physics", subtitle:"Multiple Choice", image:image, durationTime: "45 Minutes"},
    {id:3 ,title: "Chemistry", subtitle:"Structured", image:image, durationTime: "1 Hour"},
    {id:4 ,title: "Art", subtitle:"Essay", image:image, durationTime: "3 Hours"},
]

const QuizProfile = (props) => {

    const {userId, userType} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const navigate = useNavigate();


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <Box py={4} sx={{bgcolor: "#F8F9FD", minHeight: "100vh"}}>
                <BoxWithShadow component={Paper} sx={{bgcolor: "#FBFBFB", minHeight: "100vh"}}>
                    <Grid container direction={"column"} flexWrap={"nowrap"} >

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
                            <Grid item direction={"column"} lg={6} md={6} sm={12} xs={12}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h4"} color={"black"}>My Quiz</Typography>
                            </Grid>
                            <Grid item direction={"column"} lg={3} md={4} sm={6} xs={6}
                                  container
                                  justifyContent="center"
                            >
                                <Button variant={"contained"} onClick={() => navigate("/create_quiz")}
                                        startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", backgroundColor: "#00B74A"}}>Create Quiz</Button>
                            </Grid>
                        </Grid>

                        {/*----------- Quiz Slider ------------*/}
                        <Grid container direction={"column"} flexDirection={"row"} justifyContent={"flex-start"}  alignItems={"center"} p={3} pt={5}>

                            {
                                dummyData.map((value) => {
                                    return(
                                        <Grid key={value.id} lg={4} md={6} xs={12} p={1}>
                                            <QuizCard title={value.title} subtitle={value.subtitle} durationTime={value.durationTime} image={value.image}/>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>


                    </Grid>
                </BoxWithShadow>
            </Box>
            <QuizProfileMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/>
        </>
    );
};

export default QuizProfile;
