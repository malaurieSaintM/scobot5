import React from "react";
import { Link } from "react-router-dom";
import Group37 from "../Group37";
import Group39 from "../Group39";
import "./PhaseCD4.css";

class PhaseCD4 extends React.Component {
  render() {
    const {
      phaseC,
      retour,
      suivant,
      dfiN4LaMlodieEnsorceleuse,
      chaqueTapeValideVaut5Points,
      surname,
      x2LeMinotaureSeTrouveSurLeRobot,
      x3LeRobotSeTrouv,
      x4LavantDuRobot,
      group371Props,
      group372Props,
      group39Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="phase-c-d4-2 screen">
          <div className="rectangle-240-1"></div>
          <div className="phase-c-1 valign-text-middle poppins-medium-black-26px">{phaseC}</div>
          <Link to="/phase-c-defis-1">
            <div className="retour-3 poppins-medium-black-17px">{retour}</div>
          </Link>
          <div className="suivant-1 poppins-medium-black-17px">{suivant}</div>
          <div className="dfi-n4-la-mlodie-ensorceleuse-1 valign-text-middle poppins-medium-black-22px">
            {dfiN4LaMlodieEnsorceleuse}
          </div>
          <div className="chaque-tape-valide-vaut-5-points-1 valign-text-middle poppins-medium-black-17px">
            {chaqueTapeValideVaut5Points}
          </div>
          <div className="flex-row">
            <div className="surname-3 valign-text-middle poppins-medium-black-17px">{surname}</div>
            <img className="component-11-2" src="/img/component-11@2x.svg" />
          </div>
          <div className="flex-row-1">
            <div className="x2-le-minotaure-se-trouve-sur-le-robot-5 valign-text-middle poppins-medium-black-17px">
              {x2LeMinotaureSeTrouveSurLeRobot}
            </div>
            <img className="component-12-3" src="/img/component-12@2x.svg" />
          </div>
          <div className="flex-row-2">
            <div className="x3-le-robot-se-trouv-5 valign-text-middle poppins-medium-black-17px">
              {x3LeRobotSeTrouv}
            </div>
            <img className="component-13-3" src="/img/component-13@2x.svg" />
          </div>
          <div className="overlap-group4">
            <div className="x4-lavant-du-robot-5 valign-text-middle poppins-medium-black-17px">{x4LavantDuRobot}</div>
            <img className="component-14-5" src="/img/component-14@2x.svg" />
          </div>
          <div className="group-container-2">
            <div className="group-36-2 border-2px-fiord">
              <div className="overlap-group-12">
                <img className="group-34-2" src="/img/group-34@2x.svg" />
                <img className="line-1-2" src="/img/line-1@1x.svg" />
              </div>
            </div>
            <Group37 {...group371Props} />
            <Group37 {...group372Props} />
          </div>
          <Group39 className={group39Props.className} />
        </div>
      </div>
    );
  }
}

export default PhaseCD4;
