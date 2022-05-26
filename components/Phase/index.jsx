import React from "react";
import "./Phase.css";

class Phase extends React.Component {
  render() {
    const { phaseA, className } = this.props;

    return (
      <div className={`phase-1 ${className || ""}`}>
        <div className="overlap-group-3">
          <div className="phase-a-1 valign-text-middle poppins-medium-white-26px">{phaseA}</div>
          <img className="akar-iconscircle-check-fill-1" src="/img/akar-icons-circle-check-fill@2x.svg" />
          <img className="icbaseline-access-time-filled-4" src="/img/ic-baseline-access-time-filled@2x.png" />
        </div>
      </div>
    );
  }
}

export default Phase;
