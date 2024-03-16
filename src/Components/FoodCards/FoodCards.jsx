import "./FoodCards.css";
import data from "../../../public/data";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContext } from "../../Context/Context";

const FoodCards = (props) => {
  const [filteredItems, setFilteredItems] = useState(data);

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
      alert("Dieses Produkt befindet sich bereits in deiner Favoritenliste.");
    } else {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  return (
    <section className="foodcard">
      {filteredItems.map((allData) => (
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
            <AddCircleOutlineRoundedIcon />
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
    </section>
  );
};

export default FoodCards;
