import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia, Collapse,
    Grid,
    IconButton,
    Paper,
    Typography
} from "@mui/material";
import {BoxWithShadow} from "../../components/CustomBoxes";
import BackgroundImage from "../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../assets/images/profile-pic.jpg";
import AdvertisementImagesSlider from "../../components/advertisement-images-slider";
import AdvertisementProfileMenu from "../../components/advertisement/AdvertisementProfileMenu";
import {Link, useNavigate} from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AdvertisementCard from "../../components/advertisement/AdvertisementCard";
import image from "../../assets/images/online_learning.jpg"
import axios from "axios";

const AdvertiserProfile = (props) => {
    const navigate = useNavigate();
    const {userId, userType} = props;
    console.log("user id: ", userId)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const [advertisement, setAdvertisement] = useState([]);

    useEffect(async () => {
        const getAdvertisement = () => {
            /* get all advertisement data*/
            axios.get(`http://localhost:8070/advertise`)
                .then(({data = []}) => {
                    //filter only login user advertisements
                    const advertisementList = data.filter(({teacherId}) => teacherId === userId);
                    console.log(advertisementList);
                    setAdvertisement(advertisementList);
                }).catch(() => {
                alert("No data")
            })
        }
        getAdvertisement();
        console.log("advertisement : ")
    }, [])


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
                    <Grid container direction={"column"} flexWrap={"nowrap"}>

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
                                <Typography variant={"h4"} color={"black"}>My Advertisement</Typography>
                            </Grid>
                            <Grid item direction={"column"} lg={3} md={4} sm={6} xs={6}
                                  container
                                  justifyContent="center"
                            >
                                <Button variant={"contained"} onClick={() => navigate('/create_advertisement')}
                                        startIcon={<AddRoundedIcon/>}
                                        sx={{padding: "10px", backgroundColor: "#00B74A"}}>Create Advertisement</Button>
                            </Grid>
                        </Grid>

                        {/*----------- Advertisement Slider ------------*/}
                        <Grid container direction={"column"} flexDirection={"row"} justifyContent={"flex-start"}
                              alignItems={"center"} p={3} pt={5}>

                            {
                                advertisement.map((value) => {
                                    return (
                                        <Grid key={value.id} lg={4} md={6} xs={12} p={1}>
                                            <AdvertisementCard data={value} title={value.title} subtitle={value.subject}
                                                               description={value.description}
                                                               image={require(`../../assets/uploads/${value.image}`)}/>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>


                    </Grid>
                </BoxWithShadow>
            </Box>
            <AdvertisementProfileMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/>
        </>
    );
};

export default AdvertiserProfile;
