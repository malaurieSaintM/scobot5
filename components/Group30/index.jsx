import React from "react";
import "./Group30.css";

class Group30 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`group-30 ${className || ""}`}>
        <div className="surname valign-text-middle poppins-medium-black-17px">
          Le robot s’arrête sur le blason pour jouer une musique
        </div>
        <img className="component-11" src="/img/component-11-1@2x.svg" />
      </div>
    );
  }
}

export default Group30;
