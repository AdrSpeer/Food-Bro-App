import "./Product.css";
import data from "../../../public/data";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";

const Product = () => {
  const [filteredData, setFilterdData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const find = data.find((item) => Number(item.id) === Number(id));
    setFilterdData(find);
  }, []);
  console.log(filteredData);
  return (
    <section className="product">
      <img src={`../${filteredData.image}`} alt={filteredData.name} />
      <p>{filteredData.name}</p>
      <Footer />
    </section>
  );
};

export default Product;
