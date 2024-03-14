import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
import FoodCards from "../../Components/FoodCards/FoodCards";
import Footer from "../../Components/Footer/Footer";
import Searchbar from "../../Components/Searchbar/Searchbar";
import "./Home.css";

const Home = () => {

  const [activeCategory, setActiveCategory] = useState("");

  return (
    <section className="home-container">
      <Searchbar />
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      <FoodCards activeCategory={activeCategory}/>
      <Footer />
    </section>
  );
};

export default Home;
