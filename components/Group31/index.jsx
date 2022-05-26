import React from "react";
import "./Group31.css";

class Group31 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`group-31 ${className || ""}`}>
        <div className="x2-le-minotaure-se-trouve-sur-le-robot valign-text-middle poppins-medium-black-17px">
          &nbsp;&nbsp;2. Le Minotaure se trouve&nbsp;&nbsp; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sur le robot
        </div>
        <img className="component-12" src="/img/component-12-1@2x.svg" />
      </div>
    );
  }
}

export default Group31;
