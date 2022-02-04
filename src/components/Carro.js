import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

class Carro extends Component {
  state = {
    esCarroVisible: false,
  };

  mostrarCarro = () => {
    if (!this.props.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { carro } = this.props;
    const mostrarCarro = this.mostrarCarro;
    const { esCarroVisible } = this.state;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.carro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
