import "./Cart.css";
import { createElement, useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import { CartItemsContext } from "../../Context/Context";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [deliveryMessage, setDeliveryMessage] = useState("");
  const [showProduct, setShowProduct] = useState(true);
  const calculateTotalPrice = () => {
    let total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  };

  const buyIt = () => {
    setCartItems([]);
    setDeliveryMessage("Thanks for your order");
    setShowProduct(false);
  };

  const decrementCount = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? updatedItem : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

  const incrementCount = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? updatedItem : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <section className="cart-container">
      <div className="profile-t-container">
        <h2 className="profile-title">YOUR CART</h2>
      </div>
      <div className="balken"></div>
      <div className="cart-wrapper">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div className="cart-box" key={index}>
                <img src={`../${item.image}`} alt={item.name} />
                <div className="cart-order">
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price * item.quantity}</p>
                  <div>
                    <div className="cart-setting">
                      <DeleteIcon onClick={() => removeFromCart(item.id)} />
                      <div className="cart-counter">
                        <button onClick={() => decrementCount(item)}>-</button>
                        <button onClick={() => incrementCount(item)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={showProduct ? "cart-total" : "cart-hidden"}>
          <h3>Total Price: ${calculateTotalPrice()}</h3>
          <button onClick={buyIt}>Buy Now</button>
        </div>
        <h2 id="delivery-message">{deliveryMessage}</h2>
      </div>

      <Footer />
    </section>
  );
};

export default Cart;
