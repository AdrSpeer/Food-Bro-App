import Categories from "../../Components/Categories/Categories";
import FoodCards from "../../Components/FoodCards/FoodCards";
import Footer from "../../Components/Footer/Footer";
import ScrollUp from "../../Components/ScrollUp/ScrollUp";
import Searchbar from "../../Components/Searchbar/Searchbar";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <Searchbar />
      <Categories/>
      <FoodCards />
      <Footer />
    </section>
  );
};

export default Home;
