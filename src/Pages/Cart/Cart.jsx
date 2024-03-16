import "./Cart.css";
import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import { CartItemsContext } from "../../Context/Context";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  return (
    <section className="cart-container">
      <div className="profile-t-container">
        <h2 className="profile-title">WARENKORB</h2>
      </div>
      <div className="balken"></div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <img src={`../${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Cart;
