import { Component } from "react";
import Navbar from "./Navbar";
import ShopLayout from "./ShopLayout";

class Shop extends Component {
  state = {
    car: [],
  };

  addToCar = (product) => {
    const { car } = this.state;
    if (car.find((p) => p.name === product.name)) {
      const newCar = car.map((p) =>
        p.name === product.name
          ? {
              ...p,
              quantity: p.quantity + 1,
              price: p.price + product.price,
            }
          : p
      );
      return this.setState({ car: newCar });
    }
    return this.setState({
      car: this.state.car.concat({
        ...product,
        quantity: 1,
      }),
    });
  };

  render() {
    return (
      <div>
        <Navbar car={this.state.car} />
        <ShopLayout car={this.state.car} addToCar={this.addToCar} />
      </div>
    );
  }
}

export default Shop;
