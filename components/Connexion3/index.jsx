import React from "react";
import "./Connexion3.css";

class Connexion3 extends React.Component {
  render() {
    const {
      title,
      identifiant,
      inputType1,
      inputPlaceholder1,
      motDePasse,
      inputType2,
      inputPlaceholder2,
      connexion,
      motDePasseOubli,
      group13,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <form className="connexion-1-1 screen" name="form11" action="form11" method="post">
          <div className="se-connecter-2 valign-text-middle poppins-medium-black-26px">{title}</div>
          <div className="identifiant-2 valign-text-middle poppins-medium-black-18px">{identifiant}</div>
          <div className="group-25-2">
            <div className="overlap-group-18 border-1px-fiord">
              <input
                className="ex-brainus poppins-medium-midnight-moss-17px"
                name="ex_brainus"
                placeholder={inputPlaceholder1}
                type={inputType1}
                required
              />
            </div>
          </div>
          <div className="mot-de-passe-2 valign-text-middle poppins-medium-black-18px">{motDePasse}</div>
          <div className="group-26-2">
            <div className="overlap-group2-8 border-1px-fiord">
              <input
                className="x-61 poppins-medium-midnight-moss-17px"
                name="***********"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              />
            </div>
            <div className="overlap-group1-4">
              <a href="javascript:SubmitForm('form11')">
                <div className="rectangle-6-1"></div>
              </a>
              <div className="connexion-3 valign-text-middle poppins-medium-white-18px">{connexion}</div>
            </div>
          </div>
          <p className="mot-de-passe-oubli-2 valign-text-middle poppins-medium-black-12px">{motDePasseOubli}</p>
          <img className="group-13-8" src={group13} />
        </form>
      </div>
    );
  }
}

export default Connexion3;
