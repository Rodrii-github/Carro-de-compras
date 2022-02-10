import { Component } from "react";


class ImgProduct extends Component {
  render() {
    const { product, style } = this.props;
    return (
      <div>
        <img alt={product.name} src={product.img} style={style} />
      </div>
    )
  }
}


export default ImgProduct;