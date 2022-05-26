import React from "react";
import "./PageArbitreCompleterLesDiffrentsFor.css";

class PageArbitreCompleterLesDiffrentsFor extends React.Component {
  render() {
    const { group19 } = this.props;

    return (
      <div className="container-center-horizontal">
        <form
          className="page-arbitre-completer-les-differents-formulaires screen"
          onclick="window.open('javascript:SubmitForm(%27form10%27)', '_self');"
          name="form10"
          action="form10"
          method="post"
        >
          <img className="group-19" src={group19} />
          <img className="group-13-7" src="/img/group-13-1@2x.svg" />
        </form>
      </div>
    );
  }
}

export default PageArbitreCompleterLesDiffrentsFor;
