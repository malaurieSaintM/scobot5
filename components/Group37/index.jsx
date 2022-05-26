import React from "react";
import "./Group37.css";

class Group37 extends React.Component {
  render() {
    const {
      number1,
      number2,
      number3,
      number4,
      number5,
      number6,
      number7,
      number8,
      number9,
      number10,
      number11,
      number12,
      number13,
      total,
      className,
    } = this.props;

    return (
      <div className={`group-37-2 quicksand-medium-black-12px ${className || ""}`}>
        <div className="number-32">{number1}</div>
        <div className="number-33">{number2}</div>
        <div className="number-34">{number3}</div>
        <div className="number-41">{number4}</div>
        <div className="number-42">{number5}</div>
        <div className="number-container-2 quicksand-medium-black-12px">
          <div className="number-43">{number6}</div>
          <div className="number-44">{number7}</div>
          <div className="number-45">{number8}</div>
          <div className="number-46">{number9}</div>
        </div>
        <div className="number-47">{number10}</div>
        <div className="number-48">{number11}</div>
        <div className="number-49">{number12}</div>
        <div className="number-50">{number13}</div>
        <div className="total-2">{total}</div>
      </div>
    );
  }
}

export default Group37;
