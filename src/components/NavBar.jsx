import * as React from 'react';
import './gradients.css'
import pkTheme from './Theme';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
const { AppBar, Box, Toolbar, Typography, Button, ThemeProvider } = require("@mui/material")

export default function NavBar() {
    return (  
    <ThemeProvider theme={pkTheme}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="c6" sx={{borderRadius: 5}} className="sticky">
            <Toolbar>
            <Link to='/pokeminis/' style={{ textDecoration: 'none', color: 'white' }}><Typography variant="h6" component="div">Pokeminis</Typography></Link>
            <Link to="/pokeminis/type/Dark" style={{ textDecoration: 'none' }}><Typography variant="h6" component="div" className="Dark" marginLeft={5}>Dark</Typography></Link>
            <Link to="/pokeminis/type/Fire" style={{ textDecoration: 'none' }}><Typography variant="h6" component="div" className="Fire" marginLeft={5}>Fire</Typography></Link>
            <Link to="/pokeminis/type/Grass" style={{ textDecoration: 'none' }}><Typography variant="h6" component="div" className="Grass" marginLeft={5}>Grass</Typography></Link>
            <Link to="/pokeminis/type/Normal" style={{ textDecoration: 'none' }}><Typography variant="h6" component="div" className="Normal" marginLeft={5}>Normal</Typography></Link>
            <Link to="/pokeminis/type/Psychic" style={{ textDecoration: 'none' }}><Typography variant="h6" component="div" className="Psychic" marginLeft={5}>Psychic</Typography></Link>
            <Link to="/pokeminis/type/Water" style={{ textDecoration: 'none' }}><Typography variant="h6" component="div" className="Water" marginLeft={5}>Water</Typography></Link>
            <Link to='/pokeminiscart' style={{ color: 'white', textDecoration: 'none', marginLeft: 'auto' }}><Button color="inherit">{<ShoppingBasketIcon/>}</Button></Link>
            </Toolbar>
        </AppBar>
        </Box>
    </ThemeProvider>
  );
}