import { Box,AppBar,Toolbar, Button,Stack, IconButton,Avatar, useMediaQuery,Tabs,Tab,useTheme } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import { icons } from "./constants/constant";
const useNavStyle = makeStyles({
    header :{
        '&.MuiPaper-root':{
            backgroundColor : "white",
            color:"black",
        }
        
        
    }
});

const navArray = ["DashBoard","Build","Launch","Payments"];
const Navbar = ()=>{
    const classes = useNavStyle();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    
    const [value,setValue] = useState()
    return (
        <AppBar className={classes.header} position="sticky" sx={{width:'100vw'}}>
            <Toolbar>
                <Box component='img' src="https://th.bing.com/th/id/OIP.n-_XPta7uYYbydKPTpyunwHaFg?rs=1&pid=ImgDetMain"
                alt="LOGO" sx={{height:40  }}
                />

                {
                    isMatch ?<DrawerComponent/>:
                    (<>
                    <Stack direction="row" spacing={2} marginLeft={2} flexGrow={1}>
                        {/* <Button color="inherit">Dashboard</Button>
                        <Button color="inherit">Build</Button>
                        <Button color="inherit">Launch</Button>
                        <Button color="inherit">Payments</Button> */}
                        <Tabs value={value} textColor="inherit" indicatorColor="secondary"
                                onChange={(event , value)=> setValue(value)}
                                >
                                    {navArray.map((link,index)=>{
                                        return <Tab color="inherit" label={link} key={index}/>
                                    })}
                        </Tabs>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                            <Button color="inherit">Project Name #1</Button>
                            <Avatar src="https://icons.veryicon.com/png/o/miscellaneous/light-e-treasure-3/search-286.png" alt="Search" sx={{width:27 , height:27,bgcolor:"white"}}/>
                            <Avatar src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-notification-icon-png-image_4187244.jpg" alt="Notification" sx={{width:27 , height:27}}/>
                            <Avatar alt="MDG" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/1200px-Portrait_Gandhi.jpg" 
                            sx={{width:27 , height:27}}
                            />
                    </Stack>
                    </>)
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;