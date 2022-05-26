import React from "react";
import { Link } from "react-router-dom";
import "./Connexion.css";

class Connexion extends React.Component {
  render() {
    const { seConnecter, identifiant, exArbitre, motDePasse, text1, connexion, motDePasseOubli, group23 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="connexion-1 screen">
          <div className="se-connecter-1 valign-text-middle poppins-medium-black-26px">{seConnecter}</div>
          <div className="identifiant-1 valign-text-middle poppins-medium-black-18px">{identifiant}</div>
          <div className="group-25-1">
            <div className="overlap-group1-3 border-1px-fiord">
              <p className="ex-arbitre-1 valign-text-middle poppins-medium-midnight-moss-17px">{exArbitre}</p>
            </div>
          </div>
          <div className="mot-de-passe-1 valign-text-middle poppins-medium-black-18px">{motDePasse}</div>
          <form className="group-26-1">
            <div className="overlap-group2-7 border-1px-fiord">
              <p className="text-1 poppins-medium-midnight-moss-17px">{text1}</p>
            </div>
          </form>
          <Link to="/phases-1">
            <div className="group-27">
              <div className="overlap-group-17 border-2px-fiord">
                <p className="connexion-2 valign-text-middle poppins-medium-black-18px">{connexion}</p>
              </div>
            </div>
          </Link>
          <p className="mot-de-passe-oubli-1 valign-text-middle poppins-medium-black-12px">{motDePasseOubli}</p>
          <img className="group-23" src={group23} />
        </div>
      </div>
    );
  }
}

export default Connexion;
