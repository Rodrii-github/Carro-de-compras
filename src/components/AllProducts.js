import { Component } from "react";
import Product from "./Product";

const styles = {
  products: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class AllProducts extends Component {
  products = [
    { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
    { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
    { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
  ];

  render() {
    const products = this.products;
    const { addToCart } = this.props;
    return (
      <div style={styles.products}>
        {products.map(product => {
          const { name } = product;
          return <Product key={name} product={product} addToCart={addToCart} />;
        })}
      </div>
    );
  }
}

export default AllProducts;
