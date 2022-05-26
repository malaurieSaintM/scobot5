import React from "react";
import { Link } from "react-router-dom";
import Group30 from "../Group30";
import Group31 from "../Group31";
import Group32 from "../Group32";
import Group33 from "../Group33";
import Group3822 from "../Group3822";
import Group39 from "../Group39";
import "./PhaseCD1.css";

class PhaseCD1 extends React.Component {
  render() {
    const {
      phaseC,
      retour,
      suivant,
      dfiN4LaMlodieEnsorceleuse,
      chaqueTapeValideVaut5Points,
      group30Props,
      group31Props,
      group32Props,
      group3822Props,
      group39Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="phase-c-d1-1 screen">
          <div className="rectangle-240-4"></div>
          <div className="phase-c-4 valign-text-middle poppins-medium-black-26px">{phaseC}</div>
          <Link to="/phase-c-defis">
            <div className="retour-6 poppins-medium-black-17px">{retour}</div>
          </Link>
          <div className="suivant-4 poppins-medium-black-17px">{suivant}</div>
          <div className="dfi-n4-la-mlodie-ensorceleuse-4 valign-text-middle poppins-medium-black-22px">
            {dfiN4LaMlodieEnsorceleuse}
          </div>
          <div className="chaque-tape-valide-vaut-5-points-4 valign-text-middle poppins-medium-black-17px">
            {chaqueTapeValideVaut5Points}
          </div>
          <Group30 className={group30Props.className} />
          <Group31 className={group31Props.className} />
          <Group32 className={group32Props.className} />
          <Group33 />
          <Group3822 {...group3822Props} />
          <Group39 className={group39Props.className} />
        </div>
      </div>
    );
  }
}

export default PhaseCD1;
