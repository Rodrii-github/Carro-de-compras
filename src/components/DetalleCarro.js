import { Component } from "react";
const _ = require ("lodash");

const styles = {
  detallesCarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0, 0, 0, 0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "1px solid #aaa",
  },
};

class DetalleCarro extends Component {
  render() {
    const { carro } = this.props;
    const priceTotal = _.sumBy(carro, "price");
    const subtotal = _.sumBy(carro, "cantidad");
    
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((x) => (
            <li style={styles.producto} key={x.name}>
              <img alt={x.name} src={x.img} width="50" height="32" />
              {x.name}
              <span>{x.cantidad}</span>
              <span>{x.price}</span>
            </li>
          ))}
          <div style={styles.producto}>
            {subtotal} x {priceTotal}
          </div>
          <div style={styles.producto}>
            Total: {priceTotal}
          </div>
        </ul>
      </div>
    );
  }
}

export default DetalleCarro;
