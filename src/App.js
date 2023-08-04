import {
    AppBar,
    Box,
    Button, ButtonGroup, Card, CardActions, CardContent, CardMedia,
    Container,
    createTheme,
    CssBaseline, Grid, Input, InputAdornment, InputLabel, TextField,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import {
    AddCircle,
    AddCircleOutlined,
    RemoveCircle,
    Search,
    SearchRounded,
    ShoppingCartRounded
} from "@mui/icons-material";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Odoms Pos
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}/>
                    <Button variant="contained" color="success" startIcon={<ShoppingCartRounded />}>
                        Checkout
                    </Button>
                </Toolbar>
            </AppBar>
            <main>
                <Box sx={{pt: 6, pb: 6}}>
                    <Container maxWidth="sm">
                        <TextField id="search" variant="outlined" sx={{ width: '100%', pb: 4 }} InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchRounded/>
                                </InputAdornment>
                            )
                        }}>
                        </TextField>

                        <Grid container spacing={4}>
                            <Grid item key={1} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            pt: '100%'
                                        }}
                                        image="./Bottle_of_milk.jpg"
                                    />
                                    <CardContent sx={{ flexGrow: 1, pb: 0 }}>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Milk
                                        </Typography>
                                        <Typography>
                                            $69
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <ButtonGroup variant="contained">
                                            <Button size="small"><RemoveCircle/></Button>
                                            <Button size="small"><AddCircle/></Button>
                                        </ButtonGroup>
                                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    );
}

export default App;
