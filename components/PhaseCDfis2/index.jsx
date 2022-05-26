import React from "react";
import { Link } from "react-router-dom";
import Component15 from "../Component15";
import "./PhaseCDfis2.css";

class PhaseCDfis2 extends React.Component {
  render() {
    const {
      lesDfis,
      retour,
      component15,
      component16,
      component17,
      component18,
      group39,
      component151Props,
      component152Props,
      component153Props,
      component154Props,
      component155Props,
      component156Props,
      component157Props,
      component158Props,
      component159Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <form className="phase-c-defis screen" name="form5" action="form5" method="post">
          <div className="rectangle-8-2"></div>
          <div className="les-dfis-1 valign-text-middle poppins-medium-black-26px">{lesDfis}</div>
          <Link to="/phases-1">
            <div className="retour-2 poppins-medium-black-17px">{retour}</div>
          </Link>
          <Link to="/phase-c-d4">
            <img className="component-15-1" src={component15} />
          </Link>
          <Link to="/phase-c-d4">
            <img className="component-16-1" src={component16} />
          </Link>
          <a href="javascript:SubmitForm('form5')">
            <img className="component-17-1" src={component17} />
          </a>
          <a href="javascript:SubmitForm('form5')">
            <img className="component-18-1" src={component18} />
          </a>
          <Component15 className={component151Props.className} buttonProps={component151Props.buttonProps} />
          <Component15 className={component152Props.className} buttonProps={component152Props.buttonProps} />
          <Component15 className={component153Props.className} buttonProps={component153Props.buttonProps} />
          <Component15 className={component154Props.className} buttonProps={component154Props.buttonProps} />
          <Component15 className={component155Props.className} buttonProps={component155Props.buttonProps} />
          <Component15 className={component156Props.className} buttonProps={component156Props.buttonProps} />
          <Component15 className={component157Props.className} buttonProps={component157Props.buttonProps} />
          <Component15 className={component158Props.className} buttonProps={component158Props.buttonProps} />
          <Component15 className={component159Props.className} buttonProps={component159Props.buttonProps} />
          <img className="group-39-7" src={group39} />
        </form>
      </div>
    );
  }
}

export default PhaseCDfis2;
