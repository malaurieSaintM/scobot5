import React from "react";
import Button from "../Button";
import "./Component1522.css";

class Component1522 extends React.Component {
  render() {
    const { icBaselineAccessTimeFilled, buttonProps } = this.props;

    return (
      <div className="component-15">
        <div className="overlap-group">
          <Button>{buttonProps.children}</Button>
          <img className="akar-iconscircle-check-fill" src="/img/akar-icons-circle-check-fill@2x.svg" />
          <img className="icbaseline-access-time-filled" src={icBaselineAccessTimeFilled} />
        </div>
      </div>
    );
  }
}

export default Component1522;
