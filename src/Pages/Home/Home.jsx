import Footer from "../../Components/Footer/Footer";
import Searchbar from "../../Components/Searchbar/Searchbar";
import "./Home.css";

const Home = () => {
    return (
        <section className="home-container">
          <Searchbar/>
          <Footer/>
        </section>
    );
}
 
export default Home;
