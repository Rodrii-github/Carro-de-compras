import { Component } from "react";

class ProductImage extends Component {
  render() {
    const { product: { name, img }, style } = this.props;
    return <img alt={name} src={img} style={style} />;
  }
}

export default ProductImage;
