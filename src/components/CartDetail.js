import { Component } from "react";
import ImageProduct from "./ImageProduct";
import QuantityAndPrice from "./QuantityAndPrice";
import PriceTotal from "./PriceTotal";


const styles = {
  cartDetail: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0, 0, 0, 0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "1px solid #aaa",
  },
  img: {
    width: 75,
    height: 50,
  },
};

class CartDetail extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div style={styles.cartDetail}>
        <ul style={styles.ul}>
          {cart.map(({ name, quantity, price, img }) => (
            <li style={styles.product} key={name}>
              <ImageProduct product={{ name, img }} style={styles.img} />
              {name} {"(" + price + ")"}
              <QuantityAndPrice product={{ quantity, price }} />
            </li>
          ))}
          <div style={styles.product}>
            <PriceTotal cart={cart} />
          </div>
        </ul>
      </div>
    );
  }
}

export default CartDetail;
