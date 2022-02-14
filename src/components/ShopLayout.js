import { Component } from "react";
import Title from "./Title";
import Layout from "./Layout";
import AllProducts from "./AllProducts";



class ShopLayout extends Component {
  render() {
    const { addToCart } = this.props;
    return (
        <Layout>
          <Title />
          <AllProducts addToCart={addToCart} />
        </Layout>
    );
  }
}


export default ShopLayout;