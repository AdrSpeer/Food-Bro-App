import "./Product.css";
import data from "../../../public/data";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Product = () => {
  const [filteredData, setFilterdData] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const find = data.find((item) => Number(item.id) === Number(id));
    setFilterdData(find);
  }, []);
  console.log(filteredData);
  return (
    <section className="product">
      <img src={filteredData.image} alt={filteredData.name} />
      <p>{filteredData.name}</p>
    </section>
  );
};

export default Product;
