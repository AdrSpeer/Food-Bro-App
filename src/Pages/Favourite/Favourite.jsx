import "./Favourite.css";
import Footer from "../../Components/Footer/Footer";
import { useContext } from "react";
import { FavoriteContext } from "../../Context/Context";

const Favourite = () => {

    const { favoriteItems, setFavoriteItems } = useContext(FavoriteContext);

    return (
        <section className="favourite-container">
           <div className="favo-t-container">
            <h2 className="favo-title">DEINE FAVORITEN</h2>
            </div> 
            <div className="balken"></div>
            {favoriteItems.map((itemid, key) => (
                <div className="favorite-foodcard" key={key}>
                    <p>{itemid}</p>
                </div>
            ))}
            <Footer/>
        </section>
    );
}
 
export default Favourite;