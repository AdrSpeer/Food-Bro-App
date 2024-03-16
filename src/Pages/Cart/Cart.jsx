import "./Cart.css";
import Footer from "../../Components/Footer/Footer";

const Cart = ({ cartItems }) => {
  return (
    <section className="cart-container">
      <div className="profile-t-container">
        <h2 className="profile-title">WARENKORB</h2>
      </div>
      <div className="balken"></div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={`../${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </section>
  );
};

export default Cart;
