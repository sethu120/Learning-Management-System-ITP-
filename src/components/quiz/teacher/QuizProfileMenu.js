import React from 'react';
import {useNavigate} from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Avatar, Divider} from "@mui/material";
import profileIcon from "../../../assets/images/profile-pic.jpg";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";
import {Logout} from "@mui/icons-material";

const QuizProfileMenu = ({anchorEl, openMenu, handleClose}) => {
    const navigate = useNavigate();

    function profile() {
        handleClose();
        navigate('/profile');
    }

    function myQuiz() {
        handleClose();
        navigate('/my_quiz');
    }

    function createQuiz() {
        handleClose();
        navigate('/create_quiz');
    }

    return (
        <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}

            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        >
            <MenuItem onClick={profile}>
                <Avatar sx={{width: 56, height: 56}} alt="Remy Sharp" src={profileIcon}/>
                <ListItemText primary={<Typography variant={"h6"}>Gimhani</Typography>} secondary={"See your profile"}/>
            </MenuItem>
            <Divider/>

            <MenuItem onClick={createQuiz}>
                <ListItemIcon>
                    <AddCircleRoundedIcon fontSize="small"/>
                </ListItemIcon>
                Create Quiz
            </MenuItem>
            <MenuItem onClick={myQuiz}>
                <ListItemIcon>
                    <StyleRoundedIcon fontSize="small"/>
                </ListItemIcon>
                My Quiz
            </MenuItem>
            <Divider/>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small"/>
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );
};

export default QuizProfileMenu;
