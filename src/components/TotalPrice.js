import { Component } from "react";
const _ = require("lodash");

class TotalPrice extends Component {
  render() {
    const { cart } = this.props;
    const totalPrice = _.sumBy(cart, ({ quantity, price }) => quantity * price);
    return <>Total: {totalPrice}</>;
  }
}

export default TotalPrice;
