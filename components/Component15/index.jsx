import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Component15.css";

class Component15 extends React.Component {
  render() {
    const { className, buttonProps } = this.props;

    return (
      <div className={`component-19 ${className || ""}`}>
        <div className="overlap-group-1">
          <Button className={buttonProps.className}>{buttonProps.children}</Button>
          <img className="icbaseline-access-time-filled-1" src="/img/ic-baseline-access-time-filled@2x.png" />
        </div>
      </div>
    );
  }
}

export default Component15;
