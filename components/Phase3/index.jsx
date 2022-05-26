import React from "react";
import "./Phase3.css";

class Phase3 extends React.Component {
  render() {
    const { phaseA } = this.props;

    return (
      <div className="phase-7">
        <div className="overlap-group3">
          <div className="phase-a-3 valign-text-middle poppins-medium-white-26px">{phaseA}</div>
          <img className="icbaseline-access-time-filled-6" src="/img/ic-baseline-access-time-filled@2x.png" />
        </div>
      </div>
    );
  }
}

export default Phase3;
