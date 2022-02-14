import { Component } from "react";
import ImageProduct from "./ImageProduct";
const _ = require("lodash");

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
    const priceTotal = _.sumBy(cart, ({ quantity, price }) => quantity * price);

    return (
      <div style={styles.cartDetail}>
        <ul style={styles.ul}>
          {cart.map((x) => (
            <li style={styles.product} key={x.name}>
              <ImageProduct product={x} style={styles.img} />
              {x.name} {"(" + x.price + ")"}
              <span>{x.quantity}</span>
              <span>{x.quantity * x.price}</span>
            </li>
          ))}
          <div style={styles.product}>Total: {priceTotal}</div>
        </ul>
      </div>
    );
  }
}

export default CartDetail;
