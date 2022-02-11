import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CarDetail from "./CarDetail";
const _ = require('lodash');

const styles = {
  car: {
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

class Car extends Component {
  state = {
    visibleCar: false,
  };

  viewCar = () => {
    if (!this.props.car.length) {
      return;
    }
    this.setState({ visibleCar: !this.state.visibleCar });
  };

  render() {
    const { car } = this.props;
    const viewCar = this.viewCar;
    const { visibleCar } = this.state;
    const quantity = _.sumBy(car, "quantity");

    return (
      <div>
        <span style={styles.bubble}>
          {quantity !== 0 ? <BubbleAlert value={quantity} /> : null}
        </span>
        <button onClick={viewCar} style={styles.car}>
          Carro
        </button>
        {visibleCar ? <CarDetail car={car} /> : null}
      </div>
    );
  }
}

export default Car;
