import React from "react";
import Phase from "../Phase";
import Phase2 from "../Phase2";
import Phase3 from "../Phase3";
import "./Phases.css";

class Phases extends React.Component {
  render() {
    const { lesPhases, phaseA, phase1Props, phase2Props, phase3Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <form className="phases-1 screen" name="form3" action="form3" method="post">
          <div className="rectangle-8-1"></div>
          <div className="les-phases valign-text-middle poppins-medium-black-26px">{lesPhases}</div>
          <Phase phaseA={phase1Props.phaseA} />
          <Phase phaseA={phase2Props.phaseA} className={phase2Props.className} />
          <a href="javascript:SubmitForm('form3')">
            <div className="phase">
              <div className="overlap-group1">
                <div className="phase-a valign-text-middle poppins-medium-white-26px">{phaseA}</div>
                <img className="icbaseline-access-time-filled-3" src="/img/ic-baseline-access-time-filled-11@2x.svg" />
              </div>
            </div>
          </a>
          <Phase2 />
          <Phase3 phaseA={phase3Props.phaseA} />
          <img className="group-13" src="/img/group-13@2x.svg" />
        </form>
      </div>
    );
  }
}

export default Phases;
