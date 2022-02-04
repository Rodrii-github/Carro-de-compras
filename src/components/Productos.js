import { Component } from "react";
import Producto from "./Producto";

const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class Productos extends Component {
  products = [
    { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
    { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
    { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
  ];

  render() {
    const Product = this.products;
    const { carro, agregarAlCarro } = this.props;
    return (
      <div style={styles.productos}>
        {Product.map((product) => (
          <Producto
            key={product.name}
            products={product}
            carro={carro}
            agregarAlCarro={agregarAlCarro}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
