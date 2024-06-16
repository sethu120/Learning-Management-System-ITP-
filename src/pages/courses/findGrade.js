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


/*export const activityDataList = [
    {"id": 1, "activity": "Lesson 1 text book"},
    {"id": 2, "activity": "Lesson 1 work book"},
    {"id": 3, "activity": "Home work"},
    {"id": 4, "activity": "Recording -  Lesson 1"},
    {"id": 5, "activity": "Pass paper home work"},
    {"id": 6, "activity": "Self study lesson book"},
    {"id": 7, "activity": "Recording -  Lesson 1"},
    {"id": 8, "activity": "Lesson 1 work book"},


];*/

const FindGrade = () => {

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

                        

                        {/*----------- description 1 ------------*/}
                        <Grid container direction={"row"} py={2} px={3}
                              sx={{ borderTop: "1px solid #222",fontStyle:"italic"}}
                              justifyContent={"space-between"}>
                            <Grid item direction={"column"} sm={6} xs={12}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h4"} color={"black"}>What is your Grade?</Typography>
                            </Grid>
                            <Grid item direction={"column"} sm={6} xs={12}
                                  container
                                  justifyContent="center"
                            >
                                
                            </Grid>
                        </Grid>

                        {/*----------- Grades-----------*/}
                        <Grid item direction={"row"} lg={1} md={1} sm={2} xs={2} >
                            <Grid item direction={"row"} lg={2} md={3} sm={4} xs={5}
                                  container
                                  justifyContent={"flex-center"}
                            >
                                <tr>
                                    <th>
                                <Button variant={"contained"} component={Link} to={"/grade"}
                                        //startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", width: "100%",flexGrow: "2",  justifyContent:"center", align: "center", backgroundColor: "#3872FD"}}>Grade 6</Button>
                                    </th>
                                    <th>
                                <Button variant={"contained"} component={Link} to={"/grade"}
                                        //startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", width: "100%",flexGrow: "2",  justifyContent:"center", align: "center", backgroundColor: "#3872FD"}}>Grade 7</Button>
                                    </th>
                                    <th>
                                <Button variant={"contained"} component={Link} to={"/grade"}
                                        //startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", width: "100%",flexGrow: "2",  justifyContent:"center", align: "center", backgroundColor: "#3872FD"}}>Grade 8</Button>
                                    
                                <Button variant={"contained"} component={Link} to={"/grade"}
                                        //startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", width: "100%",flexGrow: "2",  justifyContent:"center", align: "center", backgroundColor: "#3872FD"}}>Grade 9</Button>

                                </tr>
                                <Button variant={"contained"} component={Link} to={"/grade"}
                                        //startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", width: "100%",flexGrow: "2",  justifyContent:"center", align: "center", backgroundColor: "#3872FD"}}>Grade 10</Button>
                                <Button variant={"contained"} component={Link} to={"/grade"}
                                        //startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", width: "100%",flexGrow: "2",  justifyContent:"center", align: "center", backgroundColor: "#3872FD"}}>Grade 11</Button>
                                <Button variant={"contained"} component={Link} to={"/grade"}
                                        //startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", width: "100%",flexGrow: "2",  justifyContent:"center", align: "center", backgroundColor: "#3872FD"}}>Grade 12</Button>
                                <Button variant={"contained"} component={Link} to={"/grade"}
                                        //startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", width: "100%",flexGrow: "2",  justifyContent:"center", align: "center", backgroundColor: "#3872FD"}}>Grade 13</Button>
                            </Grid>
                        </Grid>

                        {/* ------------------ Cancel  Button -------------------- */}
                        <Grid container direction={"row"} pb={2} px={5}
                                // sx={{bgcolor: "#2eff00"}}
                                  justifyContent={"flex-front"}>
                                <Grid item direction={"column"} xs={2}
                                    // sx={{bgcolor: "#9b1313"}}
                                      container
                                      justifyContent="center" px={1}
                                >
                                    <Button variant={"contained"} component={Link} to={"/home"} onClick={() => history(-1)}
                                            sx={{padding: "10px", backgroundColor: "#262626"}}>Cancel</Button>
                                </Grid>
                        </Grid>

                          
                    </Grid>
                </BoxWithShadow>
            </Box>
            <CustomMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/>
        </>
    );
};

export default FindGrade;
