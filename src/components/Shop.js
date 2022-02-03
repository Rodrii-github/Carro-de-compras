import { Component } from "react";
import Productos from "./Productos";
import Layout from "./Layout";
import Title from "./Title";
import Navbar from "./Navbar";

class Shop extends Component {
  products = [
    { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
    { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
    { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
  ];

  state = {
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (product) => {
    const { carro } = this.state;
    const Products = this.products;
    if (carro.find((p) => p.name === Products.name)) {
      const newCarro = carro.map((p) =>
        p.name === Products.name
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

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.products}
          />
        </Layout>
      </div>
    );
  }
}

export default Shop;
