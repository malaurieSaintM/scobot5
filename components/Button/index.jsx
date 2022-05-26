import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`button-2 border-1px-cerulean-frost ${className || ""}`}>
        <div className="primary-button-2 poppins-medium-eerie-black-26px">{children}</div>
      </div>
    );
  }
}

export default Button;
