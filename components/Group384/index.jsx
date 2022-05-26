import React from "react";
import Group37 from "../Group37";
import "./Group384.css";

class Group384 extends React.Component {
  render() {
    const { group34, line1, group371Props, group372Props } = this.props;

    return (
      <div className="group-38-7">
        <div className="group-container-5">
          <div className="group-36-5 border-2px-fiord">
            <div className="overlap-group-16">
              <img className="group-34-5" src={group34} />
              <img className="line-1-5" src={line1} />
            </div>
          </div>
          <Group37 {...group371Props} />
          <Group37 {...group372Props} />
        </div>
      </div>
    );
  }
}

export default Group384;
