import React from "react";
import "./Group32.css";

class Group32 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`group-32 ${className || ""}`}>
        <div className="x3-le-robot-se-trouv valign-text-middle poppins-medium-black-17px">
          &nbsp;&nbsp;3. Le robot se trouve <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrêté sur la dalle bleue <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n°1.
        </div>
        <img className="component-13" src="/img/component-13-1@2x.svg" />
      </div>
    );
  }
}

export default Group32;
