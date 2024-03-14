import "./FoodCards.css";
import data from "../../../public/data";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteContext } from "../../Context/Context";

const FoodCards = (props) => {

  
  const [filteredItems, setFilteredItems] = useState(data);

  useEffect(() => {
    if(props.activeCategory.length === 0) {
        setFilteredItems(data); 
    } else {
      const items = data.filter(item => item.category === props.activeCategory);
      setFilteredItems(items); 
    }
  }, [props.activeCategory]);

  const { favoriteItems, setFavoriteItems } = useContext(FavoriteContext);

  const addFavorite = (itemID) => {
    console.log(favoriteItems);
    if(favoriteItems.includes(itemID)) {
      alert("Dieses Produkt befindet sich bereits in deiner Favoritenliste.")
    } else {
      setFavoriteItems([...favoriteItems, itemID])
    }
  };

  return (
    <section className="foodcard">
      {filteredItems.map((allData) => (
        <Link to={`/product/${allData.id}`} key={allData.id}>
          <div className="foodcard-box" >
            <div className="foodcard-rate">
              <StarIcon style={{ fill: "#ffc700" }} />
              <p>{allData.rating}</p>
            </div>
            <div className="foodcard-img">
              <img src={allData.image} alt={allData.name} />
            </div>
            <div className="foodcard-content">
              <h2>{allData.name}</h2>
              <p>{allData.shortdesc}</p>
            </div>
            <div className="foodcard-price">
              <p>${allData.price}</p>
              <AddCircleOutlineRoundedIcon />
            </div>
            <div className="favo-icon">
              <FavoriteIcon onClick={() => addFavorite(allData.id)} className={`${favoriteItems.includes(allData.id) ? "favo-active" : "" }`}/>
            </div>
          </div>
          </Link>
      ))}
    </section>
  );
};

export default FoodCards;
