import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Menu from "@mui/material/Menu";
import {useNavigate} from "react-router-dom";

const QuizMenu = ({anchorEl, openMenu, handleClose, ViewClick}) => {

    const navigate = useNavigate();
    function createAds() {
        handleClose();
        navigate('/edit_quiz');
    }

    function viewMore() {
        handleClose();
        ViewClick();
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
            <MenuItem onClick={viewMore}>
                <ListItemIcon>
                    <WysiwygIcon fontSize="small"/>
                </ListItemIcon>
                View More
            </MenuItem>
            <MenuItem onClick={createAds}>
                <ListItemIcon>
                    <ModeEditOutlineRoundedIcon fontSize="small"/>
                </ListItemIcon>
                Edit
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <DeleteForeverRoundedIcon fontSize="small"/>
                </ListItemIcon>
                Delete
            </MenuItem>
        </Menu>
    );
};

export default QuizMenu;
