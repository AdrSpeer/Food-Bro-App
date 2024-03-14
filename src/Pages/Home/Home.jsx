import FoodCards from "../../Components/FoodCards/FoodCards";
import Footer from "../../Components/Footer/Footer";
import Searchbar from "../../Components/Searchbar/Searchbar";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <Searchbar />
      <FoodCards />
      <Footer />
    </section>
  );
};

export default Home;
