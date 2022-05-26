import React from "react";
import { Link } from "react-router-dom";
import Group30 from "../Group30";
import Group31 from "../Group31";
import Group32 from "../Group32";
import Group33 from "../Group33";
import Group38 from "../Group38";
import Group39 from "../Group39";
import "./PhaseCD412.css";

class PhaseCD412 extends React.Component {
  render() {
    const { phaseC, retour, suivant, dfiN4LaMlodieEnsorceleuse, chaqueTapeValideVaut5Points } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="phase-c-d4-1-1 screen">
          <div className="rectangle-240-3"></div>
          <div className="phase-c-3 valign-text-middle poppins-medium-black-26px">{phaseC}</div>
          <Link to="/phase-c-defis">
            <div className="retour-5 poppins-medium-black-17px">{retour}</div>
          </Link>
          <div className="suivant-3 poppins-medium-black-17px">{suivant}</div>
          <div className="dfi-n4-la-mlodie-ensorceleuse-3 valign-text-middle poppins-medium-black-22px">
            {dfiN4LaMlodieEnsorceleuse}
          </div>
          <div className="chaque-tape-valide-vaut-5-points-3 valign-text-middle poppins-medium-black-17px">
            {chaqueTapeValideVaut5Points}
          </div>
          <Group30 />
          <Group31 />
          <Group32 />
          <Group33 />
          <Group38 />
          <Group39 />
        </div>
      </div>
    );
  }
}

export default PhaseCD412;
