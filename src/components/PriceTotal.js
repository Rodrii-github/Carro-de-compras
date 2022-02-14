import { Component } from "react";
const _ = require("lodash");

class PriceTotal extends Component {
  render() {
    const { cart } = this.props;
    const priceTotal = _.sumBy(cart, ({ quantity, price }) => quantity * price);
    return <>Total: {priceTotal}</>;
  }
}

export default PriceTotal;
