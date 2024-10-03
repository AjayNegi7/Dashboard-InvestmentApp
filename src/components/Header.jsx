import Grid from '@mui/material/Grid'; // Use the standard Grid
import { Box, createTheme, IconButton, LinearProgress, Stack, TableBody, TableCell, TableHead, TableRow, ThemeProvider, Typography } from "@mui/material";
import {Table} from "@mui/material"
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';

import data from "./constants/tableData.json"
const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: "subtitle1" },
                    style: { fontWeight: 700, fontSize: 17 }
                },
                {
                    props: { variant: "body2" },
                    style: { fontWeight: 200, fontSize: 12 }
                },
                {
                    props: { variant: "body1" },
                    style: { fontWeight: 400, fontSize: 14 }
                },
                {
                    props: { variant: 'h6' },
                    style: { fontWeight: 900, fontSize: 25 }
                }
            ]
        }
    }
})
const Header = () => {
    // console.log(data.tableData);
    const icons = {
        Brightness5OutlinedIcon,
        DeveloperModeOutlinedIcon,
        NotificationsNoneOutlinedIcon,
        CloseOutlinedIcon,
    };
    return (
       <Box m={10}>
         <Grid container  >
            <ThemeProvider theme={theme}>
                <Grid item md={8} lg={8} xl={8}>
                    <Stack direction="row" height='10rem' boxShadow="0px 0px 10px white" alignItems="center" spacing={3}>
                        <Stack>
                            <Stack direction="row" spacing={1} >
                                <GridViewOutlinedIcon />
                                <Box>
                                    <Typography variant='subtitle1' component='p'>1,000,000</Typography>
                                    <Typography variant='body2' component='p'>Fully diluted Shares</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack direction="row" spacing={1} >
                                <DonutSmallOutlinedIcon />
                                <Box>
                                    <Typography variant='subtitle1' component='p'>1,000,000</Typography>
                                    <Typography variant='body2' component='p'>Fully diluted Shares</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack direction="row" spacing={1} >
                                <CardMembershipIcon />
                                <Box>
                                    <Typography variant='subtitle1' component='p'>1,000,000</Typography>
                                    <Typography variant='body2' component='p'>Fully diluted Shares</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack direction="row" spacing={1} >
                                <LockOutlinedIcon />
                                <Box>
                                    <Typography variant='subtitle1' component='p'>1,000,000</Typography>
                                    <Typography variant='body2' component='p'>Fully diluted Shares</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                                <LinearProgress
                                    value={26}
                                    variant="determinate"
                                    sx={{ height: 20, width: '7rem' }}
                                />
                                <Typography variant='subtitle1' component='p'>$21.3K</Typography>
                            </Stack>
                            <Typography variant='body2' component='p'>Outstanding Revenue</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item lg={4} xl={4} style={{ rowSpan: 2 }}>
                    <Box bgcolor="pink" p={4} >Item-1</Box>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    <Box
                        width='100%'
                        height='20rem'
                        sx={{
                            position: 'relative',
                            backgroundImage: 'url("https://img.freepik.com/premium-vector/financial-business-chart-with-moving-up-arrow-graph-stock-market-blue-color-background_293525-3566.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'white',

                        }}
                    >
                        <Box sx={{ position: 'relative', padding: '2rem' }}>
                            <Typography variant='h6' component='h6'>$53.9K</Typography>
                            <Typography variant='body1' component='h6'>$80,040 Income</Typography>
                            <Typography variant='body1' component='h6'>$34,112 Expense</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    <Box
                        width='100%'
                        height='20rem'
                        sx={{
                            position: 'relative',
                            backgroundImage: 'url("https://framerusercontent.com/images/ah45VMWYJx8bkgJTpVdXeNWCeA.png?scale-down-to=1024")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'white',
                        }}
                    >
                    </Box>
                </Grid>
                <Grid item lg={4}>
                    <Box bgcolor="pink" p={4}>

                    </Box>
                </Grid>
                <Grid item lg={8} mt={6}>
                        <Typography variant='h6' component='h4' mb={6}>Top Products</Typography>
                        <Table hoverRow>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '40%' }}>Product</TableCell>
                                <TableCell>Sold Amount</TableCell>
                                <TableCell>Unit Price</TableCell>
                                <TableCell>Revenue</TableCell>
                                <TableCell>Rating</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {data.tableData.map((data) => {
                                  const Icon = icons[data.rowImage]
                                return(
                                    <TableRow key={data.id} sx={{textAlign:"left"}}>
                                    <TableCell > {Icon && <Icon style={{ verticalAlign: 'middle', marginRight: 4 }} />}{data.product}</TableCell>
                                    <TableCell>{data.soldAmount}</TableCell>
                                    <TableCell>{data.unitPrice}</TableCell>
                                    <TableCell>{data.revenue}</TableCell>
                                    <TableCell>{data.rating}</TableCell>
                                </TableRow>
                                )
                            })
                            }
                        </TableBody>
                        </Table>

                </Grid>
            </ThemeProvider>
        </Grid>
       </Box>
    );
}

export default Header;
