import { Box,AppBar,Toolbar, Button,Stack, IconButton,Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const useNavStyle = makeStyles({
    header :{
        backgroundColor : "transparent",
        color:"black",
        
    }
})
const Navbar = ()=>{
    const classes = useNavStyle();
    console.log(classes);
    
    return (
        <AppBar className={classes.header} position="sticky">
            <Toolbar>
                <Box component='img' src="https://th.bing.com/th/id/OIP.n-_XPta7uYYbydKPTpyunwHaFg?rs=1&pid=ImgDetMain"
                alt="LOGO" sx={{height:40  }}
                />

                <Stack direction="row" spacing={2} marginLeft={2} flexGrow={1}>
                    <Button color="inherit">Dashboard</Button>
                    <Button color="inherit">Build</Button>
                    <Button color="inherit">Launch</Button>
                    <Button color="inherit">Payments</Button>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                        <Button color="inherit">Project Name #1</Button>
                        <Avatar src="https://icons.veryicon.com/png/o/miscellaneous/light-e-treasure-3/search-286.png" alt="Search" sx={{width:27 , height:27,bgcolor:"white"}}/>
                        <Avatar src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-notification-icon-png-image_4187244.jpg" alt="Notification" sx={{width:27 , height:27}}/>
                        <Avatar alt="MDG" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/1200px-Portrait_Gandhi.jpg" 
                        sx={{width:27 , height:27}}
                        />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;