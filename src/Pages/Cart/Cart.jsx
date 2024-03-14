import "./Cart.css";
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
    return (
        <section className="cart-container">
            <div className="profile-t-container">
                <h2 className="profile-title">WARENKORB</h2>
            </div> 
            <div className="balken"></div>
            <Footer/>
        </section>
    );
}
 
export default Cart;