import "./Product.css";
import data from "../../../public/data";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { CartItemsContext } from "../../Context/Context";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Product = () => {
  const [filteredData, setFilterdData] = useState({});
  const [count, setCount] = useState(0);
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const find = data.find((item) => Number(item.id) === Number(id));
    setFilterdData(find);
  }, [filteredData]);
  console.log(filteredData);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    if (count > 0) {
      const newItem = { ...filteredData, quantity: count };
      setCartItems([...cartItems, newItem]);
      setCount(0);
    }
  };
  console.log(cartItems);
  return (
    <section className="product">
      <Link className="product-back" to={"/"}>
        <ArrowBackIosIcon />
      </Link>
      <div className="product-headline">
        {" "}
        <img src={`../${filteredData.image}`} alt={filteredData.name} />
        <h2>{filteredData.name}</h2>
        <Stack spacing={1}>
          <Rating
            name="half-rating-read"
            value={Number(filteredData.rating)}
            precision={0.1}
            readOnly
            max={5}
            emptyIcon={<StarBorderIcon style={{ color: "#faaf00" }} />}
          />
        </Stack>
      </div>

      <div className="detail-counter">
        <button onClick={decrementCount}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <p>{filteredData.longdesc}</p>
      <div className="product-buy">
        <div className="product-price">
          <p>Price</p>
          <p id="price">
            <span>$</span>
            {filteredData.price}
          </p>
        </div>
        <button onClick={addToCart}>Add to cart</button>
      </div>

      <Footer />
    </section>
  );
};

export default Product;
