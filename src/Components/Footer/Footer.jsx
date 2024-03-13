import "./Footer.css";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <section className="footer-container">
            <NavLink to="/"><HomeIcon/></NavLink>
            <NavLink to="/favourites"><FavoriteIcon/></NavLink>
            <NavLink to="/cart"><ShoppingBasketIcon/></NavLink>
            <NavLink to="/profile"><AccountCircleIcon/></NavLink>
        </section>
    );
}
 
export default Footer;