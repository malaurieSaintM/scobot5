import React from "react";
import { Link } from "react-router-dom";
import Component1522 from "../Component1522";
import Component15 from "../Component15";
import "./PhaseCDfis.css";

class PhaseCDfis extends React.Component {
  render() {
    const {
      lesDfis,
      retour,
      component16,
      component17,
      component18,
      group39,
      component1522Props,
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
        <form className="phase-c-defis-1 screen" name="form2" action="form2" method="post">
          <div className="rectangle-8"></div>
          <h1 className="les-dfis valign-text-middle poppins-medium-black-26px">{lesDfis}</h1>
          <Link to="/phases">
            <div className="retour poppins-medium-black-17px">{retour}</div>
          </Link>
          <Component1522
            icBaselineAccessTimeFilled={component1522Props.icBaselineAccessTimeFilled}
            buttonProps={component1522Props.buttonProps}
          />
          <img className="component-16" src={component16} />
          <a href="javascript:SubmitForm('form2')">
            <img className="component-17" src={component17} />
          </a>
          <a href="javascript:SubmitForm('form2')">
            <img className="component-18" src={component18} />
          </a>
          <Component15 buttonProps={component151Props.buttonProps} />
          <Component15 className={component152Props.className} buttonProps={component152Props.buttonProps} />
          <Component15 className={component153Props.className} buttonProps={component153Props.buttonProps} />
          <Component15 className={component154Props.className} buttonProps={component154Props.buttonProps} />
          <Component15 className={component155Props.className} buttonProps={component155Props.buttonProps} />
          <Component15 className={component156Props.className} buttonProps={component156Props.buttonProps} />
          <Component15 className={component157Props.className} buttonProps={component157Props.buttonProps} />
          <Component15 className={component158Props.className} buttonProps={component158Props.buttonProps} />
          <Component15 className={component159Props.className} buttonProps={component159Props.buttonProps} />
          <img className="group-39" src={group39} />
        </form>
      </div>
    );
  }
}

export default PhaseCDfis;
