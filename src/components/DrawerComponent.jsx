import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { navArray } from "./constants/constant";


const DrawerComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton sx={{ marginLeft: "auto", color: "Black" }} onClick={handleMenuClick}>
                <MenuRoundedIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}

                PaperProps={{ sx: { backgroundColor: '#f5f5f5' } }}
            >
                {navArray.map((value, index) => (
                    <MenuItem onClick={handleClose} key={index}>
                        <ListItemIcon>
                            <ListItemText sx={{ color: "black" }} >{value}</ListItemText>
                        </ListItemIcon>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default DrawerComponent;
