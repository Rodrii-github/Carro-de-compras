import { Component } from "react";
import Button from "./Button";

const styles = {
  producto: {
    border: "1px solid #eee",
    boxShadow: "0 5px 5px rgb(0, 0, 0, 0.1)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  img: {
    width: "100%",
  },
};

class Producto extends Component {
  render() {
    const { products, agregarAlCarro } = this.props;
    console.log(products);
    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={products.name} src={products.img} />
        <h3>{products.name}</h3>
        <p>{products.price}</p>
        <Button onClick={() => agregarAlCarro(products)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
