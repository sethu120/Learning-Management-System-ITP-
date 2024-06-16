import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {Avatar, Divider} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import profileIcon from "../assets/images/profile-pic.jpg";
import Typography from "@mui/material/Typography";

const CustomMenu = ({anchorEl, openMenu, handleClose}) => {
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
            <MenuItem onClick={handleClose}>
                <Avatar sx={{width: 56, height: 56}} alt="Remy Sharp" src={profileIcon}/>
                <ListItemText primary={<Typography variant={"h6"}>Chalani</Typography>} secondary={"See your profile"}/>
            </MenuItem>
            <Divider/>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small"/>
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small"/>
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );
};

export default CustomMenu;
