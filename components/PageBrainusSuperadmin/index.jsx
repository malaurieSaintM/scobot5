import React from "react";
import "./PageBrainusSuperadmin.css";

class PageBrainusSuperadmin extends React.Component {
  render() {
    const { accsBrainus, gestionDuTournoi, group13 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="page-brainus-superadmin poppins-medium-black-26px screen">
          <div className="accs-brainus valign-text-middle">{accsBrainus}</div>
          <div className="gestion-du-tournoi valign-text-middle">{gestionDuTournoi}</div>
          <img className="group-13-10" src={group13} />
        </div>
      </div>
    );
  }
}

export default PageBrainusSuperadmin;
