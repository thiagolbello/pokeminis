import pkTheme from "../../Theme";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '../.././gradients.css'
import { Link } from 'react-router-dom';
const { Card, CardMedia, CardContent, Typography, CardActions, Button, ThemeProvider } = require("@mui/material")


const Item = ({ details }) => {
    return(
        <ThemeProvider theme={pkTheme}>
            <Card sx={{ maxWidth: 250, marginBottom: 5, justifySelf: "center" }}>
            <CardMedia
            component="img"
            image={details.image}
            alt={details.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h4" component="div">
                {details.name}
            </Typography>
            <Typography variant="body2" fontFamily={"cursive"} fontSize={20} className={details.type}>
                {details.type}
            </Typography>
            </CardContent>
            <CardActions>
            <Button color="c1" variant="contained" size="small" endIcon={<ShoppingCartTwoToneIcon/>}>Buy</Button>
            <Link to={`/details/${details.id}`} style={{textDecoration: 'none'}}><Button size="small" endIcon={<InfoOutlinedIcon/>}>Details</Button></Link>
            </CardActions>
            </Card>
        </ThemeProvider>
    )
}

export default Item;