import "./FoodCards.css";
import data from "../../../public/data";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContext } from "../../Context/Context";
import { CartItemsContext } from "../../Context/Context";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


const FoodCards = (props) => {
  const [filteredItems, setFilteredItems] = useState(data);
  const [count, setCount] = useState(1);
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  useEffect(() => {
    if (props.activeCategory.length === 0) {
      setFilteredItems(data);
    } else {
      const items = data.filter(
        (item) => item.category === props.activeCategory
      );
      setFilteredItems(items);
    }
  }, [props.activeCategory]);

  const { favoriteItems, setFavoriteItems } = useContext(FavoriteContext);

  const addFavorite = (item) => {
    console.log(favoriteItems);
    if (favoriteItems.some((itemdata) => item.id === itemdata.id)) {
      const updatedFavorites = favoriteItems.filter((itemdata) => item.id !== itemdata.id);
      setFavoriteItems(updatedFavorites);
      setAlertSeverity('success');
      setAlertMessage(`Produkt ${item.name} wurde aus Favoriten entfernt.`);
    } else {
      setFavoriteItems([...favoriteItems, item]);
      setAlertSeverity('success');
      setAlertMessage(`Produkt ${item.name} wurde zu Favoriten hinzugefügt.`);
    }
};

const [alertSeverity, setAlertSeverity] = useState('');
const [alertMessage, setAlertMessage] = useState('');

  const addToCart = (item) => {
    if (count > 0) {
      const itemCart = { ...item, quantity: count };
      setCartItems([...cartItems, itemCart]);
    }
  };

  return (
    <section className="foodcard" key={alertMessage}>
      {filteredItems?.map((allData) => (
        <div key={allData.id} className="foodcard-box">
          <div className="foodcard-rate">
            <StarIcon style={{ fill: "#ffc700" }} />
            <p>{allData.rating}</p>
          </div>
          <Link to={`/product/${allData.id}`}>
            <div className="foodcard-content">
              <div className="foodcard-img">
                <img src={allData.image} alt={allData.name} />
              </div>
              <h2>{allData.name}</h2>
            </div>
          </Link>
          <p className="foodcard-shortdesc">{allData.shortdesc}</p>
          <div className="foodcard-price">
            <p>${allData.price}</p>
            <AddCircleOutlineRoundedIcon
              key={allData.id}
              onClick={() => addToCart(allData)}
            />
          </div>
          <div className="favo-icon">
            <FavoriteIcon
              onClick={() => addFavorite(allData)}
              className={`${
                favoriteItems.some((itemdata) => allData.id === itemdata.id)
                  ? "favo-active"
                  : ""
              }`}
            />
          </div>
        </div>
      ))}
      {alertMessage && (
        <Alert severity={alertSeverity}>
            <AlertTitle>{alertSeverity === 'success' ? 'Erfolg' : 'Info'}</AlertTitle>
            {alertMessage}
        </Alert>
        )}
      </section>
    );
};

export default FoodCards;
