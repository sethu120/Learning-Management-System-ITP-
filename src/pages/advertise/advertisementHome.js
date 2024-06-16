import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import React, {useEffect, useState} from 'react';
import {Avatar, Box, Grid, IconButton, Paper, Typography} from "@mui/material";
import {BoxWithShadow} from "../../components/CustomBoxes";
import BackgroundImage from "../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../assets/images/profile-pic.jpg";
import CustomMenu from "../../components/CustomMenu";
import AdvertisementImagesSlider from "../../components/advertisement-images-slider";
import AdvertisementProfileMenu from "../../components/advertisement/AdvertisementProfileMenu";
import axios from "axios";
import {wait} from "@testing-library/user-event/dist/utils";

const AdvertisementHome = (props) => {



    const {userId, userType} = props;
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
                            <Grid item direction={"column"} sm={6} xs={12}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant={"h4"} color={"black"}>Advertisement</Typography>
                            </Grid>
                        </Grid>

                        {/*----------- Advertisement Slider ------------*/}
                        <Grid container justifyContent="center" alignItems={"center"} py={5}>
                            <Grid lg={9} xs={12} >
                                <AdvertisementImagesSlider />
                                {/*<ProductImagesSlider images={advertisement.image}/>*/}
                            </Grid>
                        </Grid>


                    </Grid>
                </BoxWithShadow>
            </Box>
            <AdvertisementProfileMenu userType={userType} anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/>
        </>
    );
};

export default AdvertisementHome;
