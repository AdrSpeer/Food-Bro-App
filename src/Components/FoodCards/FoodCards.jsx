import "./FoodCards.css";
import data from "../../../public/data";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
const FoodCards = () => {
  return (
    <section className="foodcard">
      {data.map((allData) => (
        <Link to={`/product/${allData.id}`}>
          <div className="foodcard-box" key={String(allData.id)}>
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
          </div>
        </Link>
      ))}
    </section>
  );
};

export default FoodCards;
