import { Component } from "react";
import Title from "./Title";
import Layout from "./Layout";
import Productos from "./Productos";



class ShopLayout extends Component {
  render() {
    const { carro, agregarAlCarro } = this.props;
    return (
      <div>
        <Layout>
          <Title />
          <Productos carro={carro} agregarAlCarro={agregarAlCarro} />
        </Layout>
      </div>
    );
  }
}


export default ShopLayout;