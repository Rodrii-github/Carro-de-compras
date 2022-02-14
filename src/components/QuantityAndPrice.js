import { Component } from "react";

class QuantityAndPrice extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <span>{product.quantity}</span>
        <span>{product.quantity * product.price}</span>
      </>
    );
  }
}

export default QuantityAndPrice;
