import { Component } from "react";
import Button from "./Button";
import ProductImage from "./ProductImage";

const styles = {
  product: {
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

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { name, price } = product;
    return (
      <div style={styles.product}>
        <ProductImage product={product} style={styles.img} />
        <h3>{name}</h3>
        <p>{price}</p>
        <Button onClick={() => addToCart(product)}>Agregar al carro</Button>
      </div>
    );
  }
}

export default Product;
