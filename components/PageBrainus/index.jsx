import React from "react";
import { Link } from "react-router-dom";
import "./PageBrainus.css";

class PageBrainus extends React.Component {
  render() {
    const { group19, group13 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="page-brainus screen" onclick="window.open('connexion-1.html', '_self');">
          <img className="group-19-1" src={group19} />
          <img className="group-13-9" src={group13} />
        </div>
      </div>
    );
  }
}

export default PageBrainus;
