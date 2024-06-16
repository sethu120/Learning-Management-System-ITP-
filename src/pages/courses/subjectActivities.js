import React from 'react';
import {Avatar, Box, Button, Grid, IconButton, Paper, Typography} from "@mui/material";
import {BoxWithShadow} from "../../components/CustomBoxes";
import BackgroundImage from "../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../assets/images/profile-pic.jpg";
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase} from "../../components/Search";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {Link} from "react-router-dom";
import CustomMenu from "../../components/CustomMenu";


export const activityDataList = [
    {"id": 1, "activity": "Lesson N text book"},
    {"id": 2, "activity": "Lesson N work book"},
    {"id": 3, "activity": "Home work"},
    {"id": 4, "activity": "Recording -  Lesson N"},
    {"id": 5, "activity": "Pass paper home work"},
    {"id": 6, "activity": "Self study lesson book"},
    {"id": 7, "activity": "Recording -  Lesson N"},
    {"id": 8, "activity": "Lesson N work book"},


];

const SubjectActivities = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

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
                            <Grid item direction={"column"} sm={6} xs={12}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h4"} color={"black"}>Subject x</Typography>
                            </Grid>
                            <Grid item direction={"column"} sm={6} xs={12}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"subtitle1"} align={"right"}>Grade n</Typography>
                                <Typography variant={"subtitle2"} align={"right"}>Teacher m</Typography>
                            </Grid>
                        </Grid>


                        {/*----------- Week bar ------------*/}
                        <Grid container direction={"row"} py={2} px={3}
                              justifyContent={"space-between"}>
                            <Grid item direction={"column"} xs={6}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h5"} color={"black"}> Week n</Typography>
                            </Grid>
                            <Grid item direction={"column"} lg={2} md={3} sm={4} xs={5}
                                  container
                                  justifyContent="center"
                            >
                                <Button variant={"contained"} component={Link} to={"/create_activity"}
                                        startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", backgroundColor: "#00B74A"}}>Create activity</Button>
                            </Grid>
                        </Grid>

                        {/*----------- Activity List ------------*/}
                        <Box sx={{
                            maxHeight: "50vh", flexGrow: 1,
                            overflow: "auto"
                        }}>

                            {activityDataList.map((value) =>
                                <Grid container direction={"row"} py={1}
                                      sx={{paddingX: {sm: 4, md: 8, lg: 12}}}
                                      justifyContent={"space-between"}>
                                    <Grid item direction={"column"} xs={6}
                                          container
                                          justifyContent="center"
                                    >
                                        <Typography variant={"body2"} color={"black"}>{value.activity}</Typography>
                                    </Grid>
                                    <Grid item direction={"row"} xs={6}
                                          container
                                          justifyContent={"flex-end"}
                                    >
                                        <Grid item direction={"row"} lg={2} md={3} sm={4} xs={5}
                                              container
                                              justifyContent="center"
                                        >
                                            <IconButton aria-label="delete" size="large">
                                                <DeleteTwoToneIcon/>
                                            </IconButton>
                                        </Grid>
                                        <Grid item direction={"row"} lg={2} md={3} sm={4} xs={5}
                                              container
                                              justifyContent="center"
                                        >
                                            <IconButton aria-label="delete" size="large">
                                                <EditTwoToneIcon/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )}


                        </Box>


                    </Grid>
                </BoxWithShadow>
            </Box>
            <CustomMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/>
        </>
    );
};

export default SubjectActivities;
