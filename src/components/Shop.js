import { Component } from "react";
import Navbar from "./Navbar";
import ShopLayout from "./ShopLayout";

class Shop extends Component {
  state = {
    cart: [],
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find(({ name }) => name === product.name)) {
      const newCart = cart.map((p) =>
        p.name === product.name
          ? {
              ...p,
              quantity: p.quantity + 1,
              price: product.price,
            }
          : p
      );
      return this.setState({ cart: newCart });
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      }),
    });
  };

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} />
        <ShopLayout addToCart={this.addToCart} />
      </div>
    );
  }
}

export default Shop;
