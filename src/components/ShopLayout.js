import { Component } from "react";
import Title from "./Title";
import Layout from "./Layout";
import AllProduct from "./AllProduct";



class ShopLayout extends Component {
  render() {
    const { car, addToCar } = this.props;
    return (
      <div>
        <Layout>
          <Title />
          <AllProduct car={car} addToCar={addToCar} />
        </Layout>
      </div>
    );
  }
}


export default ShopLayout;