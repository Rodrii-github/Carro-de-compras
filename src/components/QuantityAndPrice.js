import { Component } from "react";

class QuantityAndPrice extends Component {
  render() {
    const { product: { quantity, price } } = this.props;
  
    return (
      <>
        <span>{quantity}</span>
        <span>{quantity * price}</span>
      </>
    );
  }
}

export default QuantityAndPrice;
