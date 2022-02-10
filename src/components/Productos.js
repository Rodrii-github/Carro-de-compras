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
    const products = this.products;
    const { agregarAlCarro } = this.props;
    return (
      <div style={styles.productos}>
        {products.map((product) => (
          <Producto
            key={product.name}
            product={product}
            agregarAlCarro={agregarAlCarro}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
