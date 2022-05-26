import React from "react";
import { Link } from "react-router-dom";
import Group31 from "../Group31";
import Group32 from "../Group32";
import Group33 from "../Group33";
import Group384 from "../Group384";
import Group39 from "../Group39";
import "./PhaseCD12.css";

class PhaseCD12 extends React.Component {
  render() {
    const {
      phaseC,
      retour,
      suivant,
      dfiN4LaMlodieEnsorceleuse,
      chaqueTapeValideVaut5Points,
      group30,
      group31Props,
      group32Props,
      group384Props,
      group39Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="phase-c-d1 screen">
          <div className="rectangle-240-5"></div>
          <div className="phase-c-5 valign-text-middle poppins-medium-black-26px">{phaseC}</div>
          <Link to="/phase-c-defis">
            <div className="retour-7 poppins-medium-black-17px">{retour}</div>
          </Link>
          <div className="suivant-5 poppins-medium-black-17px">{suivant}</div>
          <div className="dfi-n4-la-mlodie-ensorceleuse-5 valign-text-middle poppins-medium-black-22px">
            {dfiN4LaMlodieEnsorceleuse}
          </div>
          <div className="chaque-tape-valide-vaut-5-points-5 valign-text-middle poppins-medium-black-17px">
            {chaqueTapeValideVaut5Points}
          </div>
          <img className="group-30-3" src={group30} />
          <Group31 className={group31Props.className} />
          <Group32 className={group32Props.className} />
          <Group33 />
          <Group384
            group34={group384Props.group34}
            line1={group384Props.line1}
            group371Props={group384Props.group371Props}
            group372Props={group384Props.group372Props}
          />
          <Group39 className={group39Props.className} />
        </div>
      </div>
    );
  }
}

export default PhaseCD12;
