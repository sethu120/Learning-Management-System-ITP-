import React from 'react';
import {Avatar, Box, Button, Grid, IconButton, List, ListItem, ListItemText, Paper, Typography} from "@mui/material";
import {BoxWithShadow} from "../../components/CustomBoxes";
import BackgroundImage from "../../assets/images/background_online_learning.jpg";
import ProfileIcon from "../../assets/images/profile-pic.jpg";
import AdvertisementImagesSlider from "../../components/advertisement-images-slider";
import AdvertisementProfileMenu from "../../components/advertisement/AdvertisementProfileMenu";
import {useLocation, useNavigate} from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const CreateAdDetails = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data);

    const products = [
        {
            name: 'Advertisement Name',
            desc: data.subject,
            value: '',
        },
        {
            name: 'Contact No.',
            desc: data.contactNo,
            value: '',
        },
        {
            name: 'Email Address',
            desc: data.email,
            value: '',
        },
        {
            name: 'Title',
            desc: data.title,
            value: '',
        },
        {
            name: 'Description',
            desc: data.description,
            value: '',
        }
    ];

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function printDoc() {
        const input = document.getElementById("pdfdiv");
        html2canvas(input).then((canvas) => {
            var img = new Image();
            const doc = new jsPDF("p", "mm", "a4");
            doc.setTextColor(255, 0, 0);
            doc.setFontSize(28);
            doc.setTextColor(0, 0, 255);
            doc.setFontSize(16);
            doc.text(10, 70, "Advertisement Management");
            doc.setTextColor(0, 255, 0);
            doc.setFontSize(12);
            doc.text(145, 85, "Signature :");
            //Date
            var m_names = new Array(
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            );

            var today = new Date();
            var seconds = today.getSeconds();
            var minutes = today.getMinutes();
            var hours = today.getHours();
            var curr_date = today.getDate();
            var curr_month = today.getMonth();
            var curr_year = today.getFullYear();

            today =
                m_names[curr_month] +
                " " +
                curr_date +
                "/ " +
                curr_year +
                " | " +
                hours +
                "h : " +
                minutes +
                "min : " +
                seconds +
                "sec";
            var newdat = today;
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(11);
            doc.text(130, 93, newdat);
            var imgHeight = (canvas.height * 200) / canvas.width;
            const imgData = canvas.toDataURL("image/png");
            doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
            const date = Date().split(" ");
            // we use a date string to generate our filename.
            const dateStr =
                "AdvertisementManagement_" +
                date[0] +
                date[1] +
                date[2] +
                date[3] +
                date[4];
            doc.save(`report_${dateStr}.pdf`);
        });
    }

    return (
        <>
            <Box py={4} sx={{bgcolor: "#F8F9FD", minHeight: "100vh"}}>
                <BoxWithShadow component={Paper} sx={{bgcolor: "#FBFBFB", minHeight: "100vh"}}>
                    <Grid container direction={"column"}  flexWrap={"nowrap"}>

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
                        <Grid container justifyContent="center" id="pdfdiv" alignItems={"center"} py={5}>
                            <Grid item direction={"column"} lg={8} md={9} sm={10} xs={11}
                                  container
                                  justifyContent="center"
                            >
                                <Typography variant="h6" gutterBottom>
                                    Advertisement summary
                                </Typography>
                                <List disablePadding>
                                    {products.map((product) => (
                                        <ListItem key={product.name} sx={{py: 1, px: 0}}>
                                            <ListItemText primary={product.name} secondary={product.desc}/>
                                            <Typography variant="body2">{product.value}</Typography>
                                        </ListItem>
                                    ))}

                                    <ListItem sx={{py: 1, px: 0}}>
                                        <ListItemText primary="Visible Days"/>
                                        <Typography variant="subtitle1" sx={{fontWeight: 700}}>
                                            {data.visibleDays}
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Grid>

                        </Grid>

                        {/*----------------- Home Button & Generate report button*/}
                        <Grid container direction={"row"} pb={2} px={5}
                              justifyContent={"center"}>
                            <Grid item direction={"column"} xs={2}
                                  container
                                  justifyContent="center" px={1}
                            >
                                <Button variant={"contained"} onClick={() => navigate("/advertisement")}
                                        sx={{padding: "10px", backgroundColor: "#262626"}}>Back to home</Button>
                            </Grid>
                            <Grid item direction={"column"} xs={2}
                                  container
                                  justifyContent="center" px={1}
                            >
                                {/*<Link to="/advertisement_summery" state={myData}>*/}
                                <Button type={"submit"} variant={"contained"} onClick={() => printDoc()}
                                        sx={{padding: "10px", backgroundColor: "#00B74A"}}>Generate Report</Button>
                                {/*</Link>*/}
                                {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                            </Grid>

                        </Grid>


                    </Grid>
                </BoxWithShadow>
            </Box>
            <AdvertisementProfileMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}/>
        </>
    );
};

export default CreateAdDetails;
