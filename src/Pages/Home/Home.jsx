import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Searchbar from "../../Components/Searchbar/Searchbar";
import "./Home.css";

const Home = () => {
    return (
        <section className="home-container">
          <Searchbar/>
          <Categories/>
          <Footer/>
        </section>
    );
}
 
export default Home;
