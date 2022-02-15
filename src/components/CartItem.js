import { Component } from "react";
import ProductImage from "./ProductImage";
import QuantityAndPrice from "./QuantityAndPrice";

class CartItem extends Component {
  render() {
    const { item, styles } = this.props;
    const { name, price } = item;
    return (
      <li style={styles.product} key={name}>
        <ProductImage product={item} style={styles.img} />
        {name} {"(" + price + ")"}
        <QuantityAndPrice product={item} />
      </li>
    );
  }
}

export default CartItem;
