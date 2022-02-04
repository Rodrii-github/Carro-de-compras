import { Component } from "react";
import Productos from "./Productos";
import Layout from "./Layout";
import Title from "./Title";
import Navbar from "./Navbar";

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
        <Layout>
          <Title />
          <Productos carro={this.state.carro} agregarAlCarro={this.agregarAlCarro} />
        </Layout>
      </div>
    );
  }
}

export default Shop;
