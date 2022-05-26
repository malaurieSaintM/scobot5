import React from "react";
import { Link } from "react-router-dom";
import Group31 from "../Group31";
import Group32 from "../Group32";
import Group33 from "../Group33";
import Group37 from "../Group37";
import Group39 from "../Group39";
import "./PhaseCD42.css";

class PhaseCD42 extends React.Component {
  render() {
    const {
      phaseC,
      retour,
      suivant,
      dfiN4LaMlodieEnsorceleuse,
      chaqueTapeValideVaut5Points,
      surname,
      group31Props,
      group371Props,
      group372Props,
      group39Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="phase-c-d4 screen">
          <div className="rectangle-240-2"></div>
          <div className="phase-c-2 valign-text-middle poppins-medium-black-26px">{phaseC}</div>
          <Link to="/phase-c-defis">
            <div className="retour-4 poppins-medium-black-17px">{retour}</div>
          </Link>
          <div className="suivant-2 poppins-medium-black-17px">{suivant}</div>
          <div className="dfi-n4-la-mlodie-ensorceleuse-2 valign-text-middle poppins-medium-black-22px">
            {dfiN4LaMlodieEnsorceleuse}
          </div>
          <div className="chaque-tape-valide-vaut-5-points-2 valign-text-middle poppins-medium-black-17px">
            {chaqueTapeValideVaut5Points}
          </div>
          <div className="flex-row-3">
            <div className="surname-4 valign-text-middle poppins-medium-black-17px">{surname}</div>
            <img className="component-11-3" src="/img/component-11@2x.svg" />
          </div>
          <Group31 className={group31Props.className} />
          <Group32 />
          <Group33 />
          <div className="group-38-5">
            <div className="group-container-3">
              <div className="group-36-3 border-2px-fiord">
                <div className="overlap-group-13">
                  <img className="group-34-3" src="/img/group-34@2x.svg" />
                  <img className="line-1-3" src="/img/line-1@1x.svg" />
                </div>
              </div>
              <Group37 {...group371Props} />
              <Group37 {...group372Props} />
            </div>
          </div>
          <Group39 className={group39Props.className} />
        </div>
      </div>
    );
  }
}

export default PhaseCD42;
