import React from "react";
import Phase from "../Phase";
import Phase2 from "../Phase2";
import Phase3 from "../Phase3";
import "./Phases2.css";

class Phases2 extends React.Component {
  render() {
    const { lesPhases, phaseA, phase1Props, phase2Props, phase3Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <form className="phases screen" name="form6" action="form6" method="post">
          <div className="rectangle-8-3"></div>
          <div className="les-phases-1 valign-text-middle poppins-medium-black-26px">{lesPhases}</div>
          <Phase phaseA={phase1Props.phaseA} />
          <Phase phaseA={phase2Props.phaseA} className={phase2Props.className} />
          <a href="javascript:SubmitForm('form6')">
            <div className="phase-9">
              <div className="overlap-group1-1">
                <div className="phase-a-5 valign-text-middle poppins-medium-white-26px">{phaseA}</div>
                <img className="icbaseline-access-time-filled-8" src="/img/ic-baseline-access-time-filled-1@2x.svg" />
              </div>
            </div>
          </a>
          <Phase2 />
          <Phase3 phaseA={phase3Props.phaseA} />
          <img className="group-13-5" src="/img/group-13@2x.svg" />
        </form>
      </div>
    );
  }
}

export default Phases2;
