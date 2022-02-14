import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CartDetail from "./CartDetail";
const _ = require('lodash');

const styles = {
  cart: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

class Cart extends Component {
  state = {
    cartIsVisible: false,
  };

  toggleCartVisibility = () => {
    if (!this.props.cart.length) {
      return;
    }
    this.setState({ cartIsVisible: !this.state.cartIsVisible });
  };

  render() {
    const { cart } = this.props;
    const { cartIsVisible } = this.state;
    const quantity = _.sumBy(cart, "quantity");

    return (
      <div>
        <span style={styles.bubble}>
          {quantity !== 0 ? <BubbleAlert value={quantity} /> : null}
        </span>
        <button onClick={this.toggleCartVisibility} style={styles.cart}>
          Carro
        </button>
        {cartIsVisible ? <CartDetail cart={cart} /> : null}
      </div>
    );
  }
}

export default Cart;
