import { Component } from "react";
import Navbar from "./Navbar";
import ShopLayout from "./ShopLayout";

class Shop extends Component {
  state = {
    carro: [],
  };

  agregarAlCarro = (product) => {
    const { carro } = this.state;
    if (carro.find((p) => p.name === product.name)) {
      const newCarro = carro.map((p) =>
        p.name === product.name
          ? {
              ...p,
              cantidad: p.cantidad + 1,
              price: p.price + product.price,
            }
          : p
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...product,
        cantidad: 1,
      }),
    });
  };

  render() {
    return (
      <div>
        <Navbar carro={this.state.carro} />
        <ShopLayout
          carro={this.state.carro}
          agregarAlCarro={this.agregarAlCarro}
        />
      </div>
    );
  }
}

export default Shop;
