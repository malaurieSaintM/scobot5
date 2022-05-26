import React from "react";
import "./ConnexionArbitre.css";

class ConnexionArbitre extends React.Component {
  render() {
    const {
      seConnecter,
      identifiant,
      inputType1,
      inputPlaceholder1,
      motDePasse,
      inputType2,
      inputPlaceholder2,
      connexion,
      motDePasseOubli,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <form className="connexion-arbitre screen" name="form9" action="form9" method="post">
          <div className="rectangle-10"></div>
          <div className="se-connecter valign-text-middle poppins-medium-black-26px">{seConnecter}</div>
          <div className="identifiant valign-text-middle poppins-medium-black-18px">{identifiant}</div>
          <div className="group-25">
            <div className="overlap-group-14">
              <div className="rectangle-7 border-1px-fiord"></div>
              <input
                className="ex-arbitre poppins-medium-midnight-moss-17px"
                name="ex_arbitre"
                placeholder={inputPlaceholder1}
                type={inputType1}
                required
              />
            </div>
          </div>
          <div className="mot-de-passe valign-text-middle poppins-medium-black-18px">{motDePasse}</div>
          <div className="group-26">
            <div className="overlap-group1-2 border-1px-fiord">
              <input
                className="x-50 poppins-medium-midnight-moss-17px"
                name="***********"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              />
            </div>
          </div>
          <a href="javascript:SubmitForm('form9')">
            <div className="group-41">
              <div className="overlap-group2-5">
                <a href="javascript:SubmitForm('form9')">
                  <div className="rectangle-6"></div>
                </a>
                <a href="javascript:SubmitForm('form9')">
                  <div className="connexion valign-text-middle poppins-medium-white-18px">{connexion}</div>
                </a>
              </div>
            </div>
          </a>
          <p className="mot-de-passe-oubli valign-text-middle poppins-medium-black-12px">{motDePasseOubli}</p>
          <img className="group-13-6" src="/img/group-13@2x.svg" />
        </form>
      </div>
    );
  }
}

export default ConnexionArbitre;
