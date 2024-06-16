import React from 'react';
import {
    Avatar,
    Backdrop, Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Fade, Grid,
    IconButton,
    Modal,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import QuizMenu from "./QuizMenu";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    flexGrow: 1,
    overflow: "auto",
    height: "95vh"
};

const QuizCard = ({title, subtitle, durationTime, image}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);

    const [expanded, setExpanded] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Card sx={{bgcolor: "#FBFBFB"}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            {title.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={handleClick}>
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={title}
                    subheader={subtitle}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                    }}>
                        Duration Time : {durationTime}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />

            </Card>
            <QuizMenu anchorEl={anchorEl} openMenu={openMenu} handleClose={handleClose}
                               ViewClick={handleOpen}/>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}

            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Grid container justifyContent={"space-between"} direction={"row"}>
                            <Grid item direction={"column"}>
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    {title}
                                </Typography>
                                <Typography id="transition-modal-title" variant="body1" component="h2">
                                    {subtitle}
                                </Typography>
                                <Typography id="transition-modal-title" variant="body1" component="h2">
                                    Duration Time : {durationTime}
                                </Typography>
                            </Grid>
                            <Grid item direction={"column"}>
                                <IconButton aria-label="settings" onClick={handleCloseModal}>
                                    <CloseRoundedIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                        <CardMedia
                            component="img"
                            height="500"
                            image={image}
                            alt="Paella dish"
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default QuizCard;
