import Grid from '@mui/material/Grid';
import { Box, createTheme, LinearProgress, Stack, Paper, Button, TableBody, TableCell, TableHead, TableRow, ThemeProvider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Table } from "@mui/material";
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import data from "./constants/tableData.json";
import { Image_URL1, Image_URL2, Image_URL3 } from './constants/constant';
import { icons } from './constants/constant';


const Header = () => {
    const t = useTheme()
    const isMatch = useMediaQuery('(max-width: 1000px)');

    const isBelowSM = useMediaQuery(t.breakpoints.down('sm'));
    console.log("Ismedium" + isMatch);

    const fontS = isBelowSM ? 10 : 14

    const theme = createTheme({
        components: {
            MuiTypography: {
                variants: [
                    { props: { variant: "subtitle1" }, style: { fontWeight: 700, fontSize: 17 } },
                    { props: { variant: "body2" }, style: { fontWeight: 200, fontSize: 10, color: "#777877" } },
                    { props: { variant: "body1" }, style: { fontWeight: 400, fontSize: fontS } },
                    { props: { variant: 'h6' }, style: { fontWeight: 700, fontSize: 16, color: "#2f3330", marginBottom: "0.4rem" } },
                ]
            },
            MuiTableCell: {
                variants: [
                    {
                        props: { component: "th" },
                        style: { fontWeight: 200, fontSize: 13, color: "#777877" }
                    },
                    {
                        props: { component: "td" },
                        style: { fontWeight: 600, fontSize: 13, color: "#403c3c" }
                    }
                ]
            },

        }
    });


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ backgroundColor: '#f5f5f5', paddingTop: 10, overflow: 'hidden' }} display="flex">
                <Stack direction="row" spacing={2} ml={isMatch ? 0 : 10} flexDirection={isMatch ? "column" : 'row'} flexWrap={isMatch ? "wrap" : "nowrap"}>
                    <Box width={isMatch ? "100%" : "70%"}>
                        <Grid container spacing={2}>
                            <Grid item sm={12} >
                                <Stack direction="row" height='8rem' spacing={3} flexWrap={isMatch ? "wrap" : "nowrap"} alignItems="flex-start" justifyContent="center">
                                    <Stack>
                                        <Stack direction="row" spacing={1}>
                                            <GridViewOutlinedIcon />
                                            <Box>
                                                <Typography variant='subtitle1' component='p' sx={{ fontWeight: { xs: 500, sm: 700 }, fontSize: { xs: 12, sm: 17 } }}>
                                                    1,000,000
                                                </Typography>
                                                <Typography variant='body2' component='p' sx={{ fontWeight: 200, fontSize: { xs: 9, sm: 10 } }}>
                                                    Fully diluted Shares
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                    <Stack>
                                        <Stack direction="row" spacing={1}>
                                            <DonutSmallOutlinedIcon />
                                            <Box>
                                                <Typography variant='subtitle1' component='p' sx={{ fontWeight: { xs: 500, sm: 700 }, fontSize: { xs: 12, sm: 17 } }}>
                                                    $1,245,000
                                                </Typography>
                                                <Typography variant='body2' component='p' sx={{ fontWeight: 200, fontSize: { xs: 9, sm: 10 } }}>
                                                    Total cash raised
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                    <Stack>
                                        <Stack direction="row" spacing={1}>
                                            <CardMembershipIcon />
                                            <Box>
                                                <Typography variant='subtitle1' component='p' sx={{ fontWeight: { xs: 500, sm: 700 }, fontSize: { xs: 12, sm: 17 } }}>
                                                    2400
                                                </Typography>
                                                <Typography variant='body2' component='p' sx={{ fontWeight: 200, fontSize: { xs: 9, sm: 10 } }}>
                                                    Stakeholders
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                    <Stack>
                                        <Stack direction="row" spacing={1}>
                                            <LockOutlinedIcon />
                                            <Box>
                                                <Typography variant='subtitle1' component='p' sx={{ fontWeight: { xs: 500, sm: 700 }, fontSize: { xs: 12, sm: 17 } }}>
                                                    $4,500
                                                </Typography>
                                                <Typography variant='body2' component='p' sx={{ fontWeight: 200, fontSize: { xs: 9, sm: 10 } }}>
                                                    In draft
                                                </Typography>
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
                                            <Typography variant='subtitle1' component='p' sx={{ fontWeight: { xs: 500, sm: 700 }, fontSize: { xs: 12, sm: 17 } }}>
                                                $21.3K
                                            </Typography>
                                        </Stack>
                                        <Typography variant='body2' component='p' sx={{ fontWeight: 200, fontSize: { xs: 9, sm: 10 } }}>
                                            Outstanding Revenue
                                        </Typography>
                                    </Stack>
                                </Stack>

                            </Grid>


                            <Grid item xs={12} md={6}>
                                <Box
                                    width={isMatch ? "90%" : "100%"}
                                    height={isMatch ? '15rem' : '17rem'}
                                    sx={{
                                        backgroundImage: `url(${Image_URL1})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        color: 'white',
                                        padding: isMatch ? '1rem' : 0,
                                        margin: '1rem auto',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Box sx={{ padding: '1rem' }}>
                                        <Typography variant='h5' component='h6' sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}>
                                            $53.9K
                                        </Typography>
                                        <Typography variant='body1' component='h6' sx={{ fontSize: { xs: '0.5rem', sm: '0.7rem' } }}>
                                            $80,040 Income
                                        </Typography>
                                        <Typography variant='body1' component='h6' sx={{ fontSize: { xs: '0.5rem', sm: '0.7rem' } }}>
                                            $34,112 Expense
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box
                                    width={isMatch ? "90%" : "100%"}
                                    height={isMatch ? '15rem' : '17rem'}
                                    sx={{
                                        backgroundImage: `url(${Image_URL2})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        color: 'white',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        margin: '1rem auto',
                                        overflow: 'hidden',
                                    }}
                                >

                                </Box>
                            </Grid>



                            <Grid item xs={12} mx={3} md={6} lg={12} mt={6} width={isMatch ? "100vw" : "30%"} alignItems="center" justifyContent="center">
                                <Typography variant='h6' component='h4' mb={6}>Top Products</Typography>
                                <Table width={isMatch ? "80%" : "70%"}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ width: '40%' }}>Product</TableCell>
                                            <TableCell>Sold Amount</TableCell>
                                            <TableCell>Unit Price</TableCell>
                                            <TableCell>Revenue</TableCell>
                                            <TableCell>Rating</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.tableData.map((data) => {
                                            const Icon = icons[data.rowImage];
                                            return (
                                                <TableRow key={data.id} sx={{ textAlign: "left" }}>
                                                    <TableCell>{Icon && <Icon style={{ verticalAlign: 'middle', marginRight: 4 }} />}{data.product}</TableCell>
                                                    <TableCell>{data.soldAmount}</TableCell>
                                                    <TableCell>{data.unitPrice}</TableCell>
                                                    <TableCell>{data.revenue}</TableCell>
                                                    <TableCell>{data.rating}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Grid>
                    </Box>

                    <Stack spacing={2} width={isMatch ? "100vw" : "30%"} alignItems="center" justifyContent="space-between">
                        <Stack spacing={2} width={isMatch ? "80%" : "70%"} sx={{ borderRadius: 2 }}  >
                            <Typography variant='h6' component='h4' align='center'>Where your money go?</Typography>
                            <Stack direction="column" spacing={1} width="100%">
                                <Stack direction="column" spacing={1} width="100%" mb={2}>
                                    <Box display="flex" width="100%" justifyContent='space-between' alignItems="center" mb={4}>
                                        <Typography variant='body1' component='p'>Transaction</Typography>
                                        <Typography variant='body1' component='p'>87,244</Typography>
                                    </Box>
                                    <LinearProgress value={17} variant="determinate" sx={{ height: 11, width: '100%' }} />
                                </Stack>
                                <Stack direction="column" spacing={1} width="100%" mb={2}>
                                    <Box display="flex" width="100%" justifyContent='space-between' alignItems="center" mb={4}>
                                        <Typography variant='body1' component='p'>Teams</Typography>
                                        <Typography variant='body1' component='p'>1,23,455</Typography>
                                    </Box>
                                    <LinearProgress value={35} variant="determinate" sx={{ height: 11, width: '100%' }} />
                                </Stack>
                                <Stack direction="column" spacing={1} width="100%" mb={2}>
                                    <Box display="flex" width="100%" justifyContent='space-between' alignItems="center" mb={4}>
                                        <Typography variant='body1' component='p'>Conversation</Typography>
                                        <Typography variant='body1' component='p'>9,54,214</Typography>
                                    </Box>
                                    <LinearProgress value={74} variant="determinate" sx={{ height: 11, width: '100%' }} />
                                </Stack>
                                <Stack direction="column" spacing={1} width="100%" mb={2}>
                                    <Box display="flex" width="100%" justifyContent='space-between' alignItems="center" mb={4}>
                                        <Typography variant='body1' component='p'>Transportation</Typography>
                                        <Typography variant='body1' component='p'>56,321</Typography>
                                    </Box>
                                    <LinearProgress value={13} variant="determinate" sx={{ height: 11, width: '100%' }} />
                                </Stack>
                                <Stack direction="column" spacing={1} width="100%" mb={2}>
                                    <Box display="flex" width="100%" justifyContent='space-between' alignItems="center" mb={4}>
                                        <Typography variant='body1' component='p'>Vehicle</Typography>
                                        <Typography variant='body1' component='p'>12,345</Typography>
                                    </Box>
                                    <LinearProgress value={7} variant="determinate" sx={{ height: 11, width: '100%' }} />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Stack width={isMatch ? "80%" : "70%"} sx={{ borderRadius: 2 }} alignItems="center"  >
                            <Paper p={4} mb={10} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", bgcolor: "#f5f5f5" }}>

                                <Box
                                    height="170px"
                                    width={isMatch ? "80%" : "70%"}
                                    component="img"
                                    mt={4}
                                    sx={{
                                        backgroundImage: `url(${Image_URL3})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: 2,
                                    }}
                                ></Box>
                                <Box p={4}>
                                    <Typography variant='h6' component='h4' sx={{ textAlign: 'center' }}>
                                        Save More Money
                                    </Typography>
                                    <Typography variant='body2' component='p' sx={{ textAlign: 'center', marginBottom: 2 }}>
                                        If you have money in a savings account, you receive interest on the account balance, and you can easily get your money whenever you want it.
                                    </Typography>
                                    <Box display="flex" justifyContent="center" width="100%">
                                        <Button variant='contained' sx={{ width: "80%" }} m={2}>
                                            View Tips
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Stack>

                    </Stack>
                </Stack>
            </Box>
        </ThemeProvider>
    );
};

export default Header;
