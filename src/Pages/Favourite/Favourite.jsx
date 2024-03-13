import "./Favourite.css";
import Footer from "../../Components/Footer/Footer";

const Favourite = () => {
    return (
        <section className="favourite-container">
           <div className="favo-t-container">
            <h2 className="favo-title">DEINE FAVORITEN</h2>
            </div> 
            <div className="balken"></div>
            <Footer/>
        </section>
    );
}
 
export default Favourite;